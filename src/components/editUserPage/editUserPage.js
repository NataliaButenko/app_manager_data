import React, { Component } from 'react';
import "./editUserPage.css";
import connect from "react-redux/es/connect/connect";
import EditForm from '../../forms/editForm/editForm';
import {updateUserByIdAsync} from "../../store/actions/users-action/update-user";

export class EditUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const { history } = this.props;
    let users = this.props.users;
    if(users.length === 0) {
      history.push('/content-page');
    }
    let tmp = users.reduce((done, user) => {
      if(user.id === +this.props.match.params.id) {
        done = user;
        return done;
      } else {
        return done
      }
    }, {});

    this.setState({
      user: tmp
    })
  }

  getInitialValues = () => {
    return {...this.state.user}
  };

  submit = () => {
    const {updateUserByIdAsync, form} = this.props;
    updateUserByIdAsync(form.edit.values);
  };

  render() {
    return (
      <div className="registrationForm">
        <h1>Редактировать пользователя</h1>
        <EditForm onSubmit={this.submit}
                  initialValues={this.getInitialValues()}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    form: state.form
  };
};

const mapDispatchToProps = {
  updateUserByIdAsync
};

export const EditUser = connect(mapStateToProps, mapDispatchToProps)(EditUserPage);
