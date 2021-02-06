<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let userFrom;
  export let userTo;

  let from = userFrom;
  let to = userTo;

  function saveUserTravel() {
    dispatch('saveUserTravel', {
      from: from.toUpperCase(),
      to: to.toUpperCase()
    });
  }
</script>

<template>
  {#if !userFrom || !userTo}
    <h2>You haven't define a daily route yet.</h2>
  {:else}
    <h2>Your daily route : ({userFrom} - {userTo})</h2>
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
    <button on:click={saveUserTravel}>
      Save
    </button>
  </form>
</template>

<style lang="scss">
  @import '../../utils/style/form';

  h2 {
    color: var(--COLOR-GREY-LIGHT);
  }

  form {
    width: 25em;
  }
</style>
