<script>
  import {onMount} from "svelte";

  export let users;
  export let user;

  let usersWithSimilarRoutes = [];

  $: {
    usersWithSimilarRoutes =
        users
            .filter(usr => usr.travel.from === user.travel.from
                && usr.travel.to === user.travel.to);

    console.log(users)
    console.log(usersWithSimilarRoutes)

  }
</script>

<style lang="scss">
  @import '../../utils/style/table';

  h2 {
    color: var(--COLOR-CYAN);
  }
</style>

<template>
  <h2>Other members with similar daily routes</h2>
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
</template>
