import Chart from 'chart.js'

function loadAnInjectChartData(dataToConvert) {

  let ctx = document.getElementById('myChart');
  let data = convertToChartData(dataToConvert);

  console.log(data)

  let options = {
    scale: {
      angleLines: {
        display: false
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 1
      }
    }
  };

  let myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
  });
}

function convertToChartData(usersStats) {
  return {
    labels: Object.keys(usersStats),
    datasets: [{
      data: Object.values(usersStats)
    }]
  }
}

export default loadAnInjectChartData;
