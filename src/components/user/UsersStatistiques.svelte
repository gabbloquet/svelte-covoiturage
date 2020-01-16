<script>
  export let users;
  export let user;

  let usersWithSameLocation;
  let usersWithSameDestination;

  let usersWithSameLocationThanConnectedUser;
  let usersWithSameDestinationThanConnectedUser;

  $: {
    usersWithSameLocationThanConnectedUser =
        users
            .filter(usr => usr.travel.from === user.travel.from)
            .length - 1;

    usersWithSameDestinationThanConnectedUser =
        users
            .filter(usr => usr.travel.to === user.travel.to)
            .length -1 ;
  }

</script>

<style>


</style>

<template>
  <h2>Statistiques for {user.firstname} {user.lastname}</h2>
  <p>Users with the same location than you : {usersWithSameLocationThanConnectedUser}</p>
  <p>Users with the same destination than you : {usersWithSameDestinationThanConnectedUser}</p>

  <h2>All statistics</h2>


</template>
