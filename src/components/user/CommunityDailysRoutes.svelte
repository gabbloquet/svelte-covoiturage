<script>
  export let users;
</script>

<style lang="scss">
  @import '../../utils/style/table';

  table {
    width: 25em;
  }

  h2 {
    color: var(--COLOR-GREEN-PASTEL);
  }
</style>

<template>
  <h2>Other members daily routes</h2>
  <table>
    <thead>
      <th>User</th>
      <th>Daily route</th>
    </thead>
    <tbody>
      { #each users as user }
      <tr>
        <td>{user.firstname} {user.lastname}</td>
        {#if user.travel.from !== ""}
          <td>({user.travel.from} - {user.travel.to})</td>
        {:else}
          <td>Undefined</td>
        {/if}
      </tr>
      {/each}
    </tbody>
  </table>
</template>
