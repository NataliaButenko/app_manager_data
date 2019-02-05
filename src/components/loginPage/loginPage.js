import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FormErrors } from "../formError/formError";
import connect from "react-redux/es/connect/connect";
import { setTokenAsync } from "../../store/actions/token-action/setToken";
import { Loading } from "../loadingComponent/loadingComponent";

export class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  onSubmitClick = (e) => {
    e.preventDefault();
    const { history, setTokenAsync } = this.props;
    setTokenAsync(this.state, history);
  };

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {[name]: value},
      () => { this.validateField(name, value) });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = (emailValid || value.length === 0) ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6 ;
        fieldValidationErrors.password = (passwordValid || value.length === 0) ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'red');
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <div className="loginForm">
          <form className="ui form">
            <div className="field">
              <label htmlFor="email">Логин </label>
              <input type="email"
                     name="email"
                     placeholder="Email"
                     value={this.state.email}
                     onChange={this.handleUserInput}
                     className={this.errorClass(this.state.formErrors.email)}
              />
              { !this.state.emailValid ? <div className='messageErr'><FormErrors
                                              field={this.state.formErrors.email} /></div> : ''}
            </div>
            <div className="field">
              <label htmlFor="password" >Пароль</label>
              <input type="password"
                     name="password"
                     placeholder="Пароль"
                     value={this.state.password}
                     onChange={this.handleUserInput}
                     className={this.errorClass(this.state.formErrors.password)}
              />
              { !this.state.passwordValid ? <div className='messageErr'><FormErrors
                                                 field={this.state.formErrors.password} /></div> : ''}
            </div>
            <button className="ui button"
                    type="submit"
                    onClick={this.onSubmitClick}
                    disabled={!this.state.formValid}
            >Войти</button>
            <Link to='/registration-page'><button className="ui button" type="submit">Зарегистрироваться</button></Link>
          </form>

        </div>
        {loading ? <Loading/> : ''}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  setTokenAsync,
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
