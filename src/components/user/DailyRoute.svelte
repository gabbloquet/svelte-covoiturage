<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let user;

  let travel = {
    from: '',
    to: ''
  };

  // $: from = user.travel.from;
  // $: to = user.travel.to;

  function saveUserTravel() {
    dispatch('saveUserTravel', travel);
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
      <input class="form__field" placeholder={travel.from} bind:value={travel.from}/>
      <label class="form__label">From</label>
    </div>
    <div class="form__group field">
      <input class="form__field" placeholder={travel.to} bind:value={travel.to}/>
      <label class="form__label">To</label>
    </div>
    <button on:click={saveUserTravel}>
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
