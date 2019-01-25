import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Table, Input, Button, Grid, Popup } from 'semantic-ui-react';
import "./contentPage.css";
import { search } from "../../store/actions/search-action/search";
import connect from "react-redux/es/connect/connect";
import { userDataFilter } from "../../selectors/userDataFilter";
import { entryUserListAsync } from "../../store/actions/users-action/entry-user-list";
import { deleteUserByIdAsync } from "../../store/actions/users-action/delete-user";
import { Loading } from "../loadingComponent/loadingComponent";

export class ContentPage extends Component {
  constructor() {
    super();
    this.state = {
      popupState: {}
    };
  }

  componentDidMount() {
    const { token, entryUserListAsync } = this.props;
    entryUserListAsync(token);
  }

  handleOpen = (popupId) => {
    return () => {
      this.setState(({popupState}) => {
        return {
          popupState: {...popupState, ...{[popupId]: true}}
        };
      });
    };
  };

  handleClose = (popupId) => {
    return () => {
      this.setState(({popupState}) => {
        return {
          popupState: {...popupState, ...{[popupId]: false}}
        };
      });
    };
  };

  search = (e) => {
    const { search } = this.props;
    search(e.target.value);
  };

  deleteUser = (userId) => {
    const { token, deleteUserByIdAsync } = this.props;
    deleteUserByIdAsync(token, userId);
  };

  render() {
    const { users, loading } = this.props;
    return (
      <div className="content">
        <div className="ui small icon input">
          <Input size='small' icon='search' placeholder='Search...' onChange={ this.search } />
          <Link to='/registration-page'>
            <Button>Добавить <i className="plus icon"></i></Button>
          </Link>
        </div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Полное имя</Table.HeaderCell>
              <Table.HeaderCell>Возраст</Table.HeaderCell>
              <Table.HeaderCell>Телефон</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Дополнительная информация</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              users.map((user, index)=> {
                return(
                  <Table.Row key={user.id + index}>
                    <Table.Cell className="col">
                      <div className="">
                        <Link to={`/edit-user/${user.id}`}>
                          <button><i className="edit outline icon"></i></button>
                        </Link>
                          <Popup wide trigger={<button><i className="trash alternate outline icon"></i> </button>}
                                 on='click'
                                 open={this.state.popupState[user.id]}
                                 onOpen={this.handleOpen(user.id)}
                                 size='small'
                          >
                            <Grid divided columns='equal'>
                              <Grid.Column>
                                <Button size='mini' color='grey' content='Удалить' onClick={() => this.deleteUser(user.id)}/>
                              </Grid.Column>
                              <Grid.Column>
                                <Button size='mini' color='grey' content='Отменить' onClick={this.handleClose(user.id)} />
                              </Grid.Column>
                            </Grid>
                          </Popup>
                      </div>
                    </Table.Cell>
                    <Table.Cell>{user.lastName} {user.firstName}</Table.Cell>
                    <Table.Cell>{user.age}</Table.Cell>
                    <Table.Cell>{user.phone}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                )
              })
            }
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='6'>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        {loading ? <Loading/> : ''}
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: userDataFilter(state),
    token: state.token,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  search,
  entryUserListAsync,
  deleteUserByIdAsync
};

export const Content = connect(mapStateToProps, mapDispatchToProps)(ContentPage);
