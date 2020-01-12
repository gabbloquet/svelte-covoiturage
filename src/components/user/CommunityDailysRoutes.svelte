<script>
  export let users;
</script>

<style>

</style>

<main>
  <ul>
    { #each users as user }
      <li>{user.firstname} {user.lastname}</li>
    {/each}
  </ul>
</main>
