<script>
  import Authentification from './components/authentification/Authentification.svelte'
  import Homepage from './views/homepage/homepage.svelte'

  let user = {
  	lastname: '',
  	firstname: ''
  };

  function updateUser(event){
  	user = event.detail;
  }

</script>

<main>
	{#if user.lastname ===  ''}
		<Authentification on:authentification={updateUser}/>
	{:else}
		<Homepage user={user}/>
	{/if}
</main>

<style>

</style>
