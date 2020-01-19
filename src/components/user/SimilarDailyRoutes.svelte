<script>
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher();

  export let users;
  export let user;

  let usersWithSimilarRoutes = [];
  let selectedUser;

  function haveTheSameTravel(user, usr) {
    return (usr.travel.from === user.travel.from && usr.travel.to === user.travel.to)
        && (usr.firstname !== user.firstname && usr.lastname !== user.firstname);
  }

  $: {
    usersWithSimilarRoutes =
        users
            .filter(usr => haveTheSameTravel(user, usr));
  }

  function navigateToUserProfile(user){
    dispatch(
        'selectedUser',
        user
    );
  }
</script>

<style lang="scss">
  @import '../../utils/style/table';
  @import '../../utils/style/link';

  table {
    width: 25em;
  }

  h2 {
    color: var(--COLOR-GREEN-LIGHT);
  }

  p {
    color: var(--COLOR-ORANGE);
  }
</style>

<template>
  <h2>Other members with similar daily routes</h2>
  {#if usersWithSimilarRoutes.length > 0}
    <table>
      <thead>
        <th>User</th>
        <th>Daily route</th>
      </thead>
      <tbody>
        {#each usersWithSimilarRoutes as usr}
          <tr>
            <td><a on:click={navigateToUserProfile(usr)}>{usr.firstname} {usr.lastname}</a></td>
            <td>({usr.travel.from} - {usr.travel.to})</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>Sorry it's no user for your travel</p>
  {/if}
</template>
