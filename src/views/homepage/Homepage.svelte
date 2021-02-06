<script>
  import {onMount} from "svelte";
  import {getAllUsers, saveUserTravel} from '../../utils/services/user/userService'
  import UserRoute from '../../components/user/DailyRoute.svelte'
  import UsersRoutes from '../../components/user/CommunityDailysRoutes.svelte'
  import SimilarDailyRoutes from "../../components/user/SimilarDailyRoutes.svelte";
  import UsersStatistiques from "../../components/user/UsersStatistiques.svelte";
  import UserProfile from "../user/UserProfile.svelte";

  export let user;

  let users = [];
  let selectedUser;

  onMount(async () => {
      users = getAllUsers();
    }
  );

  function saveUser(event) {
    const travel = event.detail;
    user = saveUserTravel(user, travel);
    users = getAllUsers();
  }

  function selectUser(event) {
    selectedUser = event.detail;
  }

  function unselectUser() {
    selectedUser = undefined;
  }

</script>

<template>
  <h1>Welcome {user.firstname} !</h1>

  <div class="bandeau">
    {#if !selectedUser}
      <div>
        <UserRoute userFrom={user.travel.from} userTo={user.travel.to} on:saveUserTravel={saveUser}/>
      </div>

      <div>
        <SimilarDailyRoutes users={users} user={user} on:selectedUser={selectUser}/>
        <UsersRoutes users={users} user={user} on:selectedUser={selectUser}/>
      </div>

      <div>
        <UsersStatistiques users={users} user={user}/>
      </div>
    {:else}
      <div>
        <UserProfile user={selectedUser} on:unselectedUser={unselectUser}/>
      </div>
    {/if}
  </div>
</template>

<style>
  h1 {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    color: var(--COLOR-PURPLE);
  }

  .bandeau {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
