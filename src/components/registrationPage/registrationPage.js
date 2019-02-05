import React, { Component } from 'react';
// import "./registrationPage.css";
import { connect } from "react-redux";
import { registerUserAsync } from "../../store/actions/users-action/register-user";
import RegistrationForm from '../forms/registrationForm/registrationForm';

export class RegistrationPage extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      error: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.error !== prevState.error) {
      return {
        user: {},
        error: true
      }
    } else {
      return null
    }
  }

  getInitialValues = () => {
    return {
      lastName: '',
      firstName: '',
      age: '',
      phone: '',
      email: '',
      password: '',
      confirm_password: ''
    };
  };

  submit = () => {
    const { form, registerUserAsync } = this.props;
    registerUserAsync(form.registration.values);
  };

  render() {
    return (
      <div className="registrationForm">
        <h1>Регистрация</h1>
        <RegistrationForm onSubmit={ this.submit }
                          initialValues={ this.getInitialValues() }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    token: state.token,
    error: state.error,
    form: state.form
  };
};

const mapDispatchToProps = {
  registerUserAsync
};

export const Registration = connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
