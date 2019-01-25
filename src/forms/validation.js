export const validate = inputs => {
  const errors = {};
  if (!inputs.lastName) {
    errors.lastName = 'Введите фамилию пользователя';
  }
  if (!inputs.firstName) {
    errors.firstName = 'Введите имя пользователя';
  }

  if (!inputs.age) {
    errors.age = 'Введите возраст пользователя';
  }

  if (!inputs.phone) {
    errors.phone = 'Введите телефон пользователя';
  }

  if (!inputs.email) {
    errors.email = 'Введите email пользователя';
  }

  if (!inputs.password) {
    errors.password = 'Введите пароль';
  } else if(inputs.password.length < 6) {
    errors.password = 'Пароль должен содержать не меньше 6 символов';
  }

  if (!inputs.confirm_password) {
    errors.confirm_password = 'Повторите введение пароля';
  } else if(inputs.confirm_password.length < 6) {
    errors.confirm_password = 'Пароль должен содержать не меньше 6 символов';
  } else if(inputs.confirm_password !== inputs.password) {
    errors.confirm_password = 'Пароль должен быть одинаковым';
  }
  return errors;
};
