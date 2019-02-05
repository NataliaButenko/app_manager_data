import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";
import { myInput } from "../field";
//import { validate } from "../validation";
import { required, number, rightAge, email, password, confirm_password, minLength6, phoneNumber } from "../validation";

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
          validate={ required }
        />
        <Field
          name="firstName"
          label="First name"
          component={ myInput }
          type="text"
          placeholder="First name"
          validate={ required }
        />
        <Field
          name="age"
          label="Age"
          component={ myInput }
          type="number"
          placeholder="Age"
          validate={ [required, number , rightAge] }
        />
        <Field
          name="phone"
          label="Phone"
          component={ myInput }
          type="number"
          placeholder="Phone"
          validate={ [required, number, phoneNumber] }
        />
        <Field
          name="email"
          label="Email"
          component={ myInput }
          type="email"
          placeholder="Email"
          validate={ [required, email] }
        />
        <Field
          name="password"
          label="Password"
          component={ myInput }
          type="password"
          placeholder="Password"
          validate={ [required, minLength6, password] }
        />
        <Field
          name="confirm_password"
          label="Confirm password"
          component={ myInput }
          type="password"
          placeholder="Confirm password"
          validate={ [required, minLength6, confirm_password] }
        />
        <button className="ui button" type="submit" label="submit">Зарегистрироваться</button>
        <Link to='/content-page'><button className="ui button" type="button">Вернуться</button></Link>
      </form>
    );
  }
}

RegistrationForm = reduxForm ({
  form: 'registration',
  //validate
}) (RegistrationForm);

export default RegistrationForm;
