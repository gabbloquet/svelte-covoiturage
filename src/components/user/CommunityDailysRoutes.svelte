<script>
  export let users;
</script>

<style>

</style>

<template>
  <h2>Other members daily routes</h2>
  <ul>
    { #each users as user }
      <li>{user.firstname} {user.lastname}</li>
    {/each}
  </ul>
</template>
