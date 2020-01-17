<script>
  import loadAnInjectChartData from "./chartService";

  export let data;

  let chartCanvas;

  $: {
    loadAnInjectChartData(chartCanvas, data);
  }
</script>

<style>

</style>

<template>
  <canvas bind:this={chartCanvas} width="100" height="100"></canvas>
</template>
