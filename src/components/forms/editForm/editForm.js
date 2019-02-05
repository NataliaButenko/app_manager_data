import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";
import { myInput } from "../field";
import { required, number, rightAge, phoneNumber, email, password, minLength6, confirm_password } from "../validation";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { activeAccordion: false }
  }

  handleClick = () => {
    this.setState({ activeAccordion: !this.state.activeAccordion})
  };

  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit } className="ui form">
        <Field
          name="lastName"
          label="Last name"
          component={ myInput }
          type="text"
          placeholder="Last name"
          inputValue={ this.props.initialValues.lastName }
          validate={ required }

        />
        <Field
          name="firstName"
          label="First name"
          component={ myInput }
          type="text"
          placeholder="First name"
          inputValue={ this.props.initialValues.firstName }
          validate={ required }
        />
        <Field
          name="age"
          label="Age"
          component={ myInput }
          type="number"
          inputValue={ this.props.initialValues.age }
          placeholder="Age"
          validate={ [required, number, rightAge] }
        />
        <Field
          name="phone"
          label="Phone"
          component={ myInput }
          type="number"
          inputValue={ this.props.initialValues.phone }
          placeholder="Phone"
          validate={ [required, number, phoneNumber] }
        />
        <Field
          name="email"
          label="Email"
          component={ myInput }
          type="email"
          inputValue={ this.props.initialValues.email }
          placeholder="Email"
          validate={ [required, email]}
        />
        <Accordion >
          <Accordion.Title onClick={this.handleClick}
                           active={this.state.activeAccordion}
          >
            <Icon name='dropdown' />
            Change password
          </Accordion.Title>
          <Accordion.Content active={this.state.activeAccordion}>
            <Field
              name="password"
              label="Password"
              component={ myInput }
              type="password"
              inputValue={ this.props.initialValues.password }
              placeholder="Password"
              validate={ [minLength6, password] }
            />
            <Field
              name="confirm_password"
              label="Confirm password"
              component={ myInput }
              type="password"
              inputValue={ this.props.initialValues.confirm_password }
              placeholder="Confirm password"
              validate={ [minLength6, confirm_password] }
            />
          </Accordion.Content>
        </Accordion>
        <button className="ui button" type="submit" label="submit">Редактировать</button>
        <Link to='/content-page'><button className="ui button" type="button">Вернуться</button></Link>
      </form>
    );
  }
}

EditForm = reduxForm ({
  form: 'edit',
  enableReinitialize : true,
  //validate
}) (EditForm);

export default EditForm;
