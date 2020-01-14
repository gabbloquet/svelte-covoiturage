<script>
  export let users;
  export let user;

  function isNotTheConnectedUser(usr){
    return user !== usr
  }
</script>

<style lang="scss">
  @import '../../utils/style/table';

  table {
    width: 25em;
  }

  h2 {
    color: var(--COLOR-CYAN);
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
            <td>{usr.firstname} {usr.lastname}</td>
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
