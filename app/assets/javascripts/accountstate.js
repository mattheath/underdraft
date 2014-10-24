
// Add sample data
current = [[0,2190.1],[1,2181.9],[2,2181.9],[3,2181.9],[4,1401.94],[5,388.14],[6,421.27],[7,421.27],[8,413.09],[9,413.09],[10,413.09],[11,413.09],[12,413.09],[13,287.99],[14,287.99],[15,256.39],[16,256.39],[17,256.39],[18,234.19]]
predicted = [[18,234.19],[19,151.5225],[20,111.9841667],[21,56.6475],[22,28.765]]
dangerzone = [[22,28.765],[23,-59.4625],[24,-125.6191667],[25,-140.3033333],[26,-284.7325],[27,-331.0983333],[28,-447.9391667],[29,-481.9441667],[30,-529.445],[31,0]]
actioned = [[31,0], [32,1957.071364]]

// GO!
$(function () {

    $('#graph').highcharts({
        chart: {
            type: 'spline'
        },
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
            tickLength: 0
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
                color: "#333"
            }]
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
            }
        },
        series: [{
            name: 'Credit',
            color: "#333",
            data: current
        },{
            name: 'Monies',
            color: '#999',
            data: predicted,
            dashStyle: 'shortdot'
        },{
            name: 'Monies',
            color: '#C02222',
            data: dangerzone
        },{
            name: 'Monies',
            color: '#22C022',
            data: actioned
        }]
    });

    $("#graph svg text tspan").each(function() {
        if ($(this).text() == "Highcharts.com") {
            $(this).hide()
        }
    });

});