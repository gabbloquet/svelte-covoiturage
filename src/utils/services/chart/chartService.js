function convertToChartData(usersStats) {
  return {
    labels: Object.keys(usersStats),
    datasets: [{
      data: Object.values(usersStats)
    }]
  }
}

// data: {
//   labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
//     datasets: [{
//     data: [20, 10, 4, 2]
//   }]
// }

export default convertToChartData;
