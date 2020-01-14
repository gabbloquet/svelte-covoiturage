<script>
  import {onMount} from "svelte";

  export let users;
  export let user;

  let usersWithSimilarRoutes = [];

  onMount( async () => {
      usersWithSimilarRoutes =
        users
          .filter(usr => usr.travel.from === user.travel.from
              && usr.travel.to === user.travel.to);
    }
  )
</script>

<style>
  /*@import '../../utils/style/table';*/
</style>

<template>
  {#each usersWithSimilarRoutes as user}

  {/each}}
</template>
