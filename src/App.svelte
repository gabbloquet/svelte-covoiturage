<script>
  import Authentification from './components/authentification/authentification.svelte'

  let user = {
  	lastname: '',
  	firstname: ''
  };

  function updateUser(event){
  	user.lastname = event.detail.lastname;
  	user.firstname = event.detail.firstname;
  }

</script>

<main>
	<h1>Welcome on Svelte covoit'</h1>

	{#if user.lastname ===  ''}
		<Authentification on:message={updateUser}/>
	{:else}
		Coucou {user.lastname} {user.firstname}
	{/if}

</main>

<style>
	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		color: var(--COLOR-PINK);
	}
</style>
