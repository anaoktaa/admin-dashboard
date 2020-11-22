export const Options = {
    elements: { 
        point: { radius: 0 } }, //point
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        label: false,
        scales: {
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false 
            },
            ticks: {
                display: false
            },            
        }],
        yAxes :[
        {
            gridLines: {
            display: false
            },
            ticks: {
                display: false
            },
        },                                           
        ],
    }
}

export const Options2 = {
      elements: { 
      point: { radius: 4 } }, //point
      legend: {
          display: false
      },
      maintainAspectRatio: false,
      label: false,
      scales: {
      xAxes: [{
          gridLines: {
              display: false,
              drawBorder: false 
          },
          ticks: {
              display: false
          },
          stacked: false
      }],
      yAxes :[
      {
          gridLines: {
          display: false
          },
          ticks: {
              display: false
          },
      },                                           
      ],
  }
}

export const Options3 = {
    legend: { display: false },
    animation: {
        animateScale: true
    },
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            barPercentage: 1,
            categoryPercentage: 1,
            gridLines: {
              display: false,
              drawBorder: false 
            },
            ticks: {
                display: false
            },
        }],
        yAxes: [{
            barPercentage: 1,
            categoryPercentage: 1,
            gridLines: {
              display: false,
              drawBorder: false 
            },
            ticks: {
                display: false
            },
        }]
    },
    tooltips: {

    }
  };