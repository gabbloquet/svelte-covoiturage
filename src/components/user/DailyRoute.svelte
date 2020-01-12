<script>
  import {onMount} from "svelte";
  import {saveUserTravel} from '../../utils/services/user/userService'

  export let user;

  let from;
  let to;

  onMount( async () => {
      from = user.travel.from;
      to = user.travel.to;
    }
  );

  function saveTravel() {
    user = saveUserTravel(
      user,
      {
        from: from,
        to: to
      }
    );
  }

</script>

<template>
  {#if user.travel.from === ""}
    <h2>You haven't define a daily route yet.</h2>
    <p>You can define it here : </p>
  {:else}
    <h2>Your daily route : ({user.travel.from} - {user.travel.to})</h2>
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

</template>

<style lang="scss">
  @import '../../utils/style/form';

  h2 {
    color: var(--COLOR-BROWN)
  }

  p {
    color: darkgrey
  }
</style>
