import {createUser, tryAndGetUser} from "./userRepository";

function authentificateOrCreateUser(lastname, firstname) {

  const user = tryAndGetUser(lastname, firstname);

  if(user === undefined){
    return createUser(lastname, firstname)
  } else {
    return user;
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

export {authentificateOrCreateUser, loadUserDailyTravel, saveUserTravel};

