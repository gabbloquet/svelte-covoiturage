<script>
  import UserTravel from '../../components/user/travel/UserTravel.svelte'

  export let user;
</script>

<main>
  <h1>Welcome {user.firstname} {user.lastname} !</h1>
  <UserTravel user={user}/>
</main>

<style>
  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    color: var(--COLOR-PINK);
  }
</style>
