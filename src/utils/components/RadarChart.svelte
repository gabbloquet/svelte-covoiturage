<script>
  import Chart from 'chart.js';

  export let data;

  let ctx = document.getElementById('myChart');

  console.log(data)

  // if(data.length > 0)
  //   let myRadarChart = new Chart(ctx, {
  //     type: 'radar',
  //     data: data
  //   });
</script>

<style>

</style>

<template>
  <canvas id="myChart" width="400" height="400"></canvas>
</template>
