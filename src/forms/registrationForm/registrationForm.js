import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";
import { myInput } from "../field";
import { validate } from "../validation";

class RegistrationForm extends Component {
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
          className="field"
        />
        <Field
          name="firstName"
          label="First name"
          component={ myInput }
          type="text"
          placeholder="First name"
          className="field"
        />
        <Field
          name="age"
          label="Age"
          component={ myInput }
          type="number"
          placeholder="Age"
        />
        <Field
          name="phone"
          label="Phone"
          component={ myInput }
          type="number"
          placeholder="Phone"
        />
        <Field
          name="email"
          label="Email"
          component={ myInput }
          type="email"
          placeholder="Email"
        />
        <Field
          name="password"
          label="Password"
          component={ myInput }
          type="password"
          placeholder="Password"
        />
        <Field
          name="confirm_password"
          label="Confirm password"
          component={ myInput }
          type="password"
          placeholder="Confirm password"
        />
        <button className="ui button" type="submit" label="submit">Зарегистрироваться</button>
        <Link to='/content-page'><button className="ui button" type="button">Вернуться</button></Link>
      </form>
    );
  }
}

RegistrationForm = reduxForm ({
  form: 'registration',
  validate
}) (RegistrationForm);

export default RegistrationForm;
