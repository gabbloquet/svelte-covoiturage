<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let firstname;
  let lastname;

  function authentificateUser() {
    dispatch(
      'connexion',
      {
        'lastname': lastname,
        'firstname': firstname
      }
    );
  }
</script>

<main>
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
</main>

<style lang="scss">
  @import './authentification.scss';
</style>
