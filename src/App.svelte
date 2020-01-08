<script>
  import Authentification from './components/authentification/Authentification.svelte'
  import Homepage from './components/homepage/homepage.svelte'

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
	{#if user.lastname ===  ''}
		<Authentification on:connexion={updateUser}/>
	{:else}
		<Homepage lastname={user.lastname} firstname={user.firstname}/>
	{/if}
</main>

<style>

</style>
