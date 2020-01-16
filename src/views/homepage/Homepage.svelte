<script>
  import {onMount} from "svelte";
  import {getAllUsers, saveUserTravel} from '../../utils/services/user/userService'
  import UserRoute from '../../components/user/DailyRoute.svelte'
  import UsersRoutes from '../../components/user/CommunityDailysRoutes.svelte'
  import SimilarDailyRoutes from "../../components/user/SimilarDailyRoutes.svelte";
  import UsersStatistiques from "../../components/user/UsersStatistiques.svelte";

  export let user;
  let users = [];

  onMount(async () => {
      users = getAllUsers();
    }
  );

  function saveUser(event) {
    const travel = event.detail;
    user = saveUserTravel(user, travel);
    users = getAllUsers();
  }

</script>

<template>
  <h1>Welcome {user.firstname} !</h1>

  <div class="bandeau">
    <div>
      <UserRoute userFrom={user.travel.from} userTo={user.travel.to} on:saveUserTravel={saveUser}/>
    </div>

    <div>
      <SimilarDailyRoutes users={users} user={user}/>
      <UsersRoutes users={users} user={user}/>
    </div>

    <div>
      <UsersStatistiques users={users} user={user}/>
    </div>
  </div>
</template>

<style>
  h1 {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    color: var(--COLOR-CYAN);
  }

  .bandeau {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
