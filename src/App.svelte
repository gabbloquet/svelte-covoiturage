<script>
  import Authentification from './components/authentification/Authentification.svelte'
  import Homepage from './views/homepage/Homepage.svelte'

  let user = {
  	lastname: '',
  	firstname: ''
  };

  function updateUser(event){
    user = event.detail;
  }

</script>

<template>
	{#if user.lastname ===  ''}
		<Authentification on:authentification={updateUser}/>
	{:else}
		<Homepage user={user}/>
	{/if}
</template>
