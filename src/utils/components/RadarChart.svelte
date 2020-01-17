<script>
  import loadAnInjectChartData from "./chartService";

  export let data;

  $: {
    if(data && Object.keys(data).length)
      loadAnInjectChartData(data);
  }
</script>

<style>

</style>

<template>
  <canvas id="myChart" width="100" height="100"></canvas>
</template>
