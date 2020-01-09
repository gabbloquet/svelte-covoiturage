let users = [];
getUsers().then(userTab => userTab.map(user => users.push(user)));

function createUser(lastname, firstname) {
  const user = {
    lastname: lastname,
    firstname: firstname,
    travel : {
      from: '',
      to: ''
    }
  };
  users.push(user);
  return user;
}

function getUsers(){
  return fetch('../static/database.json')
    .then(response => response.json());
}

function tryAndGetUser(lastname, firstname){
  return users.filter(
    user => user.lastname === lastname && user.firstname === firstname
  )[0];
}

export {createUser, getUsers, tryAndGetUser};
