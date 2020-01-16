<script>
  import RadarChart from "../../utils/components/RadarChart.svelte";
  import convertToChartData from "../../utils/services/chart/chartService";

  export let users = [];
  export let user;

  let nbUsers;

  let usersWithSameLocation = [];
  let usersWithSameDestination = [];

  let usersWithSameLocationThanConnectedUser;
  let usersWithSameDestinationThanConnectedUser;

  $: {
    nbUsers = users.length;

    usersWithSameLocationThanConnectedUser =
      users
          .filter(usr => usr.travel.from === user.travel.from)
          .length - 1;

    usersWithSameDestinationThanConnectedUser =
      users
          .filter(usr => usr.travel.to === user.travel.to)
          .length -1 ;

    usersWithSameLocation =
      users
          .reduce((acc, usr) => {
                acc[usr.travel.from] = (acc[usr.travel.from] || 0) + (1 / nbUsers);
                return acc
              },
            []);

    usersWithSameDestination =
      users
          .reduce((acc, usr) => {
              acc[usr.travel.to] = (acc[usr.travel.to] || 0) + (1 / nbUsers);
              return acc;
            },
          []);
  }

</script>

<style>
  h2 {
    color: var(--COLOR-GREEN-LIGHT);
  }
</style>

<template>
  <h2>Statistiques for {user.firstname} {user.lastname}</h2>
  <p>Users with the same location than you : {usersWithSameLocationThanConnectedUser}</p>
  <p>Users with the same destination than you : {usersWithSameDestinationThanConnectedUser}</p>

  <h2>All statistics</h2>
  <RadarChart data={convertToChartData(usersWithSameLocation)}/>
  <RadarChart data={convertToChartData(usersWithSameDestination)}/>
</template>
