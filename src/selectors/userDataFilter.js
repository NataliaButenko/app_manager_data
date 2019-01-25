export const userDataFilter = (state) => {
  return state.users.reduce((done, user) => {
    let filterByLast_name = user.lastName.includes(state.search);
    let filterByFirst_name = user.firstName.includes(state.search);
    let filterByAge = (user.age + '').includes(state.search);
    let filterByPhone = (user.phone + '').includes(state.search);
    let filterByEmail = user.email.includes(state.search);
    if(filterByLast_name) {
      done.push(user);
    } else if(filterByFirst_name) {
      done.push(user);
    } else if (filterByEmail) {
      done.push(user);
    } else if (filterByPhone) {
      done.push(user);
    } else if(filterByAge) {
      done.push(user)
    }
    return done
  }, [])
};
