let users = [];
getUsers().then(userTab => userTab.map(user => users.push(user)));


function getUsers(){
  if(users.length < 1) {
    return fetch('../static/database.json')
      .then(response => response.json());
  } else {
    return users;
  }
}


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

function tryAndGetUser(lastname, firstname){
  return users.filter(
    user => user.lastname === lastname && user.firstname === firstname
  )[0];
}

export {createUser, tryAndGetUser};
