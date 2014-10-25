
// Add sample data
current = [[0,190.1],[1,181.9],[2,2181.9],[3,2181.9],[4,1401.94],[5,388.14],[6,421.27],[7,421.27],[8,413.09],[9,413.09],[10,413.09],[11,413.09],[12,413.09],[13,287.99],[14,287.99],[15,256.39],[16,256.39],[17,256.39],[18,234.19]]
predicted = [[18,234.19],[19,151.5225],[20,111.9841667],[21,56.6475],[22,28.765]]
dangerzone = [[22,28.765],[23,-59.4625],[24,-125.6191667],[25,-140.3033333],[26,-284.7325],[27,-331.0983333],[28,-447.9391667],[29,-481.9441667],[30,-529.445],[31,0]]
actioned = [[31,0], [32,1957.071364], [33, 1900]]

// GO!

    var forecastLabelOffset = $('#graph').width() * 0.5625;

    $('#graph').highcharts({
        chart: {
            type: 'spline',
            backgroundColor: 'transparent',
            spacingLeft: 0,
            spacingRight: 0
        },
        annotations: [{
          shape: {
            type: 'circle',
            params: {
              r: 8,
              fill: "#468966",
              strokeWidth: 0,
              width: 20,
              height: 20
            }
          },
          xValue: 2,
          yValue: 2190,
        }, {
          shape: {
            type: 'circle',
            params: {
              r: 8,
              fill: "#8E2800",
              fill: "#B64926",
              strokeWidth: 0,
              width: 20,
              height: 20
            }
          },
          xValue: 5,
          yValue: 388,
        }, {
          shape: {
            type: 'circle',
            params: {
              r: 8,
              fill: "#B64926",
              strokeWidth: 0,
              width: 20,
              height: 20
            }
          },
          xValue: 29.5,
          yValue: -485,

        }],
        title: {
            text: '',
        },
        subtitle: {
            text: '',
        },
        xAxis: {
            text: "",
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0,
            plotLines: [{
                value: 18,
                width: 1,
                color: "rgba(255,255,255,0.7)"
            }]
        },
        yAxis: {
            title: {
                enabled: false
            },
            lineWidth: 0,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0,
            plotLines: [{
                value: 0,
                width: 1,
                color: "rgba(255,255,255,0.2)"
            }]
        },
        tooltip: {
            enabled: true,
            backgroundColor: "#FFB03B",

            followPointer: false,
            followTouchMove: false,
            borderWidth: 0,
            formatter: function() {
              if(this.x > 0 && this.x < 4) {
                return "<div class='pay-tooltip'>1/10 Payday: £2,107</div>"
              }
              if(this.x > 4 && this.x < 9) {
                return "<div class='rent-tooltip'>3/10 Rent: £800</div>"
              }
              return null
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                }
            },
            area: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                }
            },
            series: {
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        series: [{
            name: 'Credit',
            color: "rgba(255,255,255,0.4)",
            data: current
        },{
            name: 'Monies',
            type: 'area',
            dashStyle: 'shortdot',
            color: '#8E2800',
            data: dangerzone
        },{
            name: 'Monies',
            color: 'rgba(255,255,255,0.5)',
            data: predicted,
            dashStyle: 'shortdot'
        },{
            name: 'Monies',
            color: '#468966',
            dashStyle: 'shortdot',
            data: actioned
        }]
    });

    $("#graph svg text tspan").each(function() {
        if ($(this).text() == "Highcharts.com") {
            $(this).hide()
        }
    });


  setTimeout(function(){
    $(".overdraft-alert").addClass("in")
  }, 1000)



  $(".borrow-button").click(function(){
    $(".page1").hide()
    $(".page2").addClass("in")
    setTimeout(function() {
      $(".page2").hide()
      $(".page3").addClass("in")
    }, 1000)
  });
  
