<script>
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher();

  export let users;
  export let user;

  let selectedUser;

  function isNotTheConnectedUser(usr){
    return user !== usr
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

  a {
    font-style: italic;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<template>
  <h2>Other members daily routes</h2>
  <table>
    <thead>
      <th>user</th>
      <th>Daily route</th>
    </thead>
    <tbody>
      { #each users as usr }
        {#if isNotTheConnectedUser(usr)}
          <tr>
            <td><a on:click={navigateToUserProfile(usr)}>{usr.firstname} {usr.lastname}</a></td>
            {#if usr.travel.from !== ""}
              <td>({usr.travel.from} - {usr.travel.to})</td>
            {:else}
              <td>Undefined</td>
            {/if}
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</template>
