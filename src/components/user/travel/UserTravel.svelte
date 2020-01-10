<script>
  import {saveUserTravel} from '../../../utils/services/user/userService'

  export let user;

  function saveTravel(){
    saveUserTravel(user);
  }

</script>

<main>
  <h2>Your travel</h2>
  {#if user.travel.from === ""}
    <p>You don't define travel yet.</p>
  {:else}
    <p>You have already define your daily travel ({user.travel.from} - {user.travel.to}).</p>
    <p>You want to modify it ?</p>
  {/if}

  <form>
    <div class="form__group field">
      <input class="form__field" placeholder={user.travel.from} bind:value={user.travel.from}/>
      <label class="form__label">From</label>
    </div>
    <div class="form__group field">
      <input class="form__field" placeholder={user.travel.to} bind:value={user.travel.to}/>
      <label class="form__label">To</label>
    </div>
    <button on:click|once={saveTravel}>
      Save
    </button>
  </form>

</main>

<style lang="scss">
  @import '../../../utils/style/form';
</style>
