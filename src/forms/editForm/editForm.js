import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";
import { myInput } from "../field";
import { validate } from "../validation";

class EditForm extends Component {
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
          className="field"
        />
        <Field
          name="firstName"
          label="First name"
          component={ myInput }
          type="text"
          placeholder="First name"
          inputValue={ this.props.initialValues.firstName }
          className="field"
        />
        <Field
          name="age"
          label="Age"
          component={ myInput }
          type="number"
          inputValue={ this.props.initialValues.age }
          placeholder="Age"
        />
        <Field
          name="phone"
          label="Phone"
          component={ myInput }
          type="number"
          inputValue={ this.props.initialValues.phone }
          placeholder="Phone"
        />
        <Field
          name="email"
          label="Email"
          component={ myInput }
          type="email"
          inputValue={ this.props.initialValues.email }
          placeholder="Email"
        />
        <Field
          name="password"
          label="Password"
          component={ myInput }
          type="password"
          inputValue={ this.props.initialValues.password }
          placeholder="Password"
        />
        <Field
          name="confirm_password"
          label="Confirm password"
          component={ myInput }
          type="password"
          inputValue={ this.props.initialValues.confirm_password }
          placeholder="Confirm password"
        />
        <button className="ui button" type="submit" label="submit">Редактировать</button>
        <Link to='/content-page'><button className="ui button" type="button">Вернуться</button></Link>
      </form>
    );
  }
}

EditForm = reduxForm ({
  form: 'edit',
  enableReinitialize : true,
  validate
}) (EditForm);

export default EditForm;
