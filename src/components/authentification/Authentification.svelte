<script>
  import { createEventDispatcher } from 'svelte';
  import { authentificateOrCreateUser } from '../../utils/services/user/userService';

  const dispatch = createEventDispatcher();

  let user;
  let firstname;
  let lastname;

  function authentificateUser() {
    user = authentificateOrCreateUser(lastname, firstname);
    dispatch(
      'authentification',
      user
    );
  }
</script>

<template>
  <h1>Welcome on Svelte covoit'</h1>
  <form on:submit|preventDefault>
      <h2>Identifiez vous</h2>
      <div class="form__group field">
        <input class="form__field" placeholder="Lastname" bind:value={lastname}/>
        <label class="form__label">Lastname</label>
      </div>
    <div class="form__group">
      <input class="form__field" placeholder="Firstname" bind:value={firstname}/>
      <label class="form__label">Firstname</label>
    </div>
    <button on:click|once={authentificateUser}>
      Log in
    </button>
  </form>
</template>

<style lang="scss">
  @import '../../utils/style/form';

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    color: var(--COLOR-PURPLE);
  }

  h2 {
    color: var(--COLOR-PURPLE)
  }

  form {
    width: 40%;
  }

</style>
