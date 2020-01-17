import Chart from 'chart.js'

function loadAnInjectChartData(chart, dataToConvert) {
  if (!chart || !dataToConvert) {
    return;
  }

  let data = convertToChartData(dataToConvert);

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

  new Chart(chart, {
    type: 'radar',
    data: data,
    options: options
  });
}

function convertToChartData(usersStats) {
  return {
    labels:
      Object.keys(usersStats)
        .map(city => city === '' ? 'UNDEFINED' : city)
    ,
    datasets: [{
      label: 'City',
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      data: Object.values(usersStats)
    }]
  }
}

export default loadAnInjectChartData;
