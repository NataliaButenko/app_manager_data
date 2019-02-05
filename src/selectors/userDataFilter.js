export const userDataFilter = (state) => {
  return state.users.reduce((done, user) => {
    let filterByLast_name = user.lastName.toLowerCase().includes(state.search.toLowerCase());
    let filterByFirst_name = user.firstName.toLowerCase().includes(state.search.toLowerCase());
    let filterByAge = (user.age + '').toLowerCase().includes(state.search.toLowerCase());
    let filterByPhone = (user.phone + '').toLowerCase().includes(state.search.toLowerCase());
    let filterByEmail = user.email.toLowerCase().includes(state.search.toLowerCase());
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
