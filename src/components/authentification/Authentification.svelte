<script>
  import { createEventDispatcher } from 'svelte';
  import { getUser } from '../../services/user/userService';

  const dispatch = createEventDispatcher();

  let user;
  let firstname;
  let lastname;

  function authentificateUser() {
    user = getUser(lastname, firstname);
    dispatch(
      'authentification',
      user
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
  @import '../../services/style/form';

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    color: var(--COLOR-PINK);
  }

  h2 {
    color: var(--COLOR-BROWN)
  }

</style>
