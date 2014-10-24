seriesData = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]

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
            name: 'Monies',
            data: seriesData
        }]
    });

    $("#graph svg text tspan").each(function() {
        if ($(this).text() == "Highcharts.com") {
            $(this).hide()
        }
    });

});