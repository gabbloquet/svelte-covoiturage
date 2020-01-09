function getUser(lastname, firstname){
  let users = [];
  fetch('../static/database.json')
    .then(response => response.json())
    .then(data => users = data)

  const user = users
    .map(user => user.lastname === lastname && user.firstname === firstname);

  console.log(user);

  return {
    lastname: lastname,
    firstname: firstname
  }
}

function loadUserDailyTravel(user) {
  return {
    from: '',
    to:''
  }
}

function saveUserTravel(user, travel) {

}

export {getUser, loadUserDailyTravel, saveUserTravel};

