<script>
  import {onMount} from "svelte";
  import UserRoute from '../../components/user/DailyRoute.svelte'
  import UsersRoutes from '../../components/user/CommunityDailysRoutes.svelte'
  import {getAllUsers} from '../../utils/services/user/userService'


  export let user;
  let users = [];

  onMount( async () => {
      users = getAllUsers();
    }
  )
</script>

<template>
  <h1>Welcome {user.firstname} !</h1>

  <div class="bandeau">
    <div>
      <UserRoute user={user}/>
    </div>

    <div>
      <UsersRoutes users="{users}"/>
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
    color: var(--COLOR-PINK);
  }

  .bandeau {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
