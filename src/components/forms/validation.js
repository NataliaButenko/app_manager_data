// export const validate = inputs => {
//   //console.log(inputs.password);
//   const errors = {};
//   if (!inputs.lastName ) {
//     errors.lastName = 'Введите фамилию пользователя';
//   }
//   if (!inputs.firstName) {
//     errors.firstName = 'Введите имя пользователя';
//   }
//
//   if (!inputs.age) {
//     errors.age = 'Введите возраст пользователя';
//   }
//
//   if (!inputs.phone) {
//     errors.phone = 'Введите телефон пользователя';
//   }
//
//   if (!inputs.email) {
//     errors.email = 'Введите email пользователя';
//   }
//
//   if(inputs.password === undefined) {
//     return errors
//   } else {
//     if (!inputs.password) {
//       errors.password = 'Введите пароль';
//     } else if(inputs.password.length < 6) {
//       errors.password = 'Пароль должен содержать не меньше 6 символов';
//     }
//
//     if (!inputs.confirm_password) {
//       errors.confirm_password = 'Повторите введение пароля';
//     } else if(inputs.confirm_password.length < 6) {
//       errors.confirm_password = 'Пароль должен содержать не меньше 6 символов';
//     } else if(inputs.confirm_password !== inputs.password) {
//       errors.confirm_password = 'Пароль должен быть одинаковым';
//     }
//   }
//   return errors;
// };

export const required = (value, allValues, props, name) => {
  return value ? undefined : `Поле ${name} обязательно!`;
};

export const number = (value) => {
  return value && isNaN(Number(value))  ? 'Must be a number' : undefined;
};

export const rightAge = (value, allValues, props, name) => {
  return value && (value >= 0 && value <= 100 ) ? undefined : `Не корректное значения для поля ${name}`;
};

export const phoneNumber = (value) =>{
  return value && !/^([0-9]{10})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;
};

export const email = (value) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
};

const minLength = (min) => (value) => {
  return value && value.length <= min ? `Must be ${min} characters or more` : undefined;
};

export const minLength6 = minLength(6);

export const password = (value, allValues) => {
  if(value === undefined) {
    return undefined
  } else {
    return value !== allValues.confirm_password || allValues.confirm_password === ''
    || allValues.confirm_password === undefined ? 'введите confirm password' : undefined;
  }
};

export const confirm_password = (value, allValues) => {
  return value !== allValues.password ? 'password и confirm password должны быть одинаковы' : undefined
};
