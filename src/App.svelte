<script>
	export let lastname;
	export let firstname;

	function handleClick() {
		console.log(lastname, firstname)
	}
</script>

<main>
	<h1>Welcome on Svelte covoit'</h1>
	<form on:submit|preventDefault>
		<h2>Identifiez vous</h2>
		<label>
			<p>Nom</p>
			<input bind:value={lastname}>
		</label>
		<label>
			<p>Prenom</p>
			<input bind:value={firstname}>
		</label>
		<button on:click|once={handleClick}>
			Log in
		</button>
	</form>
</main>

<style>
	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		color: var(--COLOR-PINK);
	}

	h2 {
		color: var(--COLOR-BROWN)
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2em;
		background-color: var(--COLOR-DARK-ORANGE);
	}

	label {
		display: flex;
		flex-direction: column;
		font-size: medium;
	}

	input {
		font-size: large;
		margin-bottom: 1em;
	}

	p {
		margin-bottom: 0.5em;
	}

	button {
		font-size: large;
		padding: 0.5em;
		color: white;
		background-color: var(--COLOR-BROWN);
	}
</style>
