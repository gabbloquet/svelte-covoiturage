<script>
  import {onMount} from "svelte";
  import {saveUserTravel} from '../../../utils/services/user/userService'

  export let user;

  let from;
  let to;

  onMount( async () => {
      from = user.travel.from;
      to = user.travel.to;
    }
  );

  function saveTravel(){

    user = saveUserTravel(
      user,
      {
        from: from,
        to: to
      }
    );
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

  <form on:submit|preventDefault>
    <div class="form__group field">
      <input class="form__field" placeholder={from} bind:value={from}/>
      <label class="form__label">From</label>
    </div>
    <div class="form__group field">
      <input class="form__field" placeholder={to} bind:value={to}/>
      <label class="form__label">To</label>
    </div>
    <button on:click={saveTravel}>
      Save
    </button>
  </form>

</main>

<style lang="scss">
  @import '../../../utils/style/form';
</style>
