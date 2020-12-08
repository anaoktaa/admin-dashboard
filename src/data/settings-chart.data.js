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

/*Hidden label, border false,  */
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

/*Visible label, border true,  */
export const Options4 = {
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
              display: true,
              drawBorder: true 
            },
            ticks: {
                display: true
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

  /*Hidden label, border false,  */
export const Options5 = {
    legend: { display: false },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false 
            },
            ticks: {
                display: false
            },
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display: false,
                drawBorder: false 
            },
            ticks: {
                display: false
            },
            stacked: true
        }]
    }
};

export const Options6 = {
    legend: {
        display: false
    },
    elements: { 
        point: { radius: 0 } },
    maintainAspectRatio: true,
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
    }],
    }
}

export const Options7 = {
    legend: { display: true },
    maintainAspectRatio: true,
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false 
            },
            ticks: {
                display: false
            },
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display: false,
                drawBorder: false 
            },
            ticks: {
                display: false
            },
            stacked: true
        }]
    }
};
