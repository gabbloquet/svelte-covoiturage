<script>
  export let users;
  export let user;

  let usersWithSimilarRoutes = [];

  function haveTheSameTravel(user, usr) {
    return (usr.travel.from === user.travel.from && usr.travel.to === user.travel.to)
        && (usr.firstname !== user.firstname && usr.lastname !== user.firstname);
  }

  $: {
    usersWithSimilarRoutes =
        users
            .filter(usr => haveTheSameTravel(user, usr));
  }
</script>

<style lang="scss">
  @import '../../utils/style/table';

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
            <td>{usr.firstname} {usr.lastname}</td>
            <td>({usr.travel.from} - {usr.travel.to})</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>Sorry it's no user for your travel</p>
  {/if}
</template>
