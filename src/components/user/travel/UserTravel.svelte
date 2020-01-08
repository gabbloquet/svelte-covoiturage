<script>
  import {onMount} from "svelte";
  import {loadUserDailyTravel, saveUserTravel} from '../../../services/user/userService'

  export let user;

  let travel = {
    from: '',
    to:''
  };
  let from;
  let to;

  onMount(async () => {
        travel = loadUserDailyTravel(user);
      }
  );

  function saveTravel(){
    saveUserTravel(user, travel);
  }

</script>

<main>
  <h2>Your travel</h2>
  {#if travel.from === ""}
    <p>You don't define travel yet.</p>
  {:else}
    <p>You have already define your daily travel ({travel.from} - {travel.to}).</p>
    <p>You want to modify it ?.</p>
  {/if}

  <form>
    <div class="form__group field">
      <input class="form__field" placeholder={travel.from} bind:value={from}/>
      <label class="form__label">From</label>
    </div>
    <div class="form__group field">
      <input class="form__field" placeholder={travel.to} bind:value={to}/>
      <label class="form__label">To</label>
    </div>
    <button on:click|once={saveTravel}>
      Save
    </button>
  </form>

</main>

<style lang="scss">
  @import '../../../services/style/form';
</style>
