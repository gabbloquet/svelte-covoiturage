import {createUser, getUsers, tryAndGetUser} from "./userRepository";

function authentificateOrCreateUser(lastname, firstname) {

  const user = tryAndGetUser(lastname, firstname);

  if(user === undefined){
    return createUser(lastname, firstname)
  } else {
    return user;
  }
}

function saveUserTravel(user, travel) {
  user.travel = travel;
  return user;
}

export {authentificateOrCreateUser, saveUserTravel};
