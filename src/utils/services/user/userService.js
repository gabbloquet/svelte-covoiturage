function getUser(lastname, firstname){
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
