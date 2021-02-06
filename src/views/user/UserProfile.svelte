<script>
  import {createEventDispatcher} from "svelte";

  export let user;

  const dispatch = createEventDispatcher();

  function unselectUser(){
    dispatch(
        'unselectedUser'
    );
  }
</script>

<style>
  div {
    padding: 1em;
  }

  h2 {
    font-size: xx-large;
    color: var(--COLOR-PURPLE);
  }

  .profile {
    width: 25em;
    color: white;
    background-color: var(--COLOR-GREY);
  }

  .daily-travel {
    margin: 1em;
  }
</style>

<div class="profile">
  <h2>
    <button on:click={unselectUser}> X </button>
    {user.firstname} {user.lastname}
  </h2>
  <div class="daily-travel">
    <h3>Daily Travel</h3>
    <p>{user.travel.from === '' ? 'Undefined' : user.travel.from }</p>
    <p>{user.travel.to === '' ? 'Undefined' : user.travel.to }</p>
  </div>
</div>
