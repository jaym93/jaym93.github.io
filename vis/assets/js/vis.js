'use strict';
/* global document */

Highcharts.theme = {
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
       '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#2a2a2b'],
               [1, '#3e3e40']
            ]
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'

            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },

    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },

    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },

    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },

    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },

    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
//Highcharts.setOptions(Highcharts.theme);


var people_total = [{
    name: 'Male members',
    data: Male_members,
    stack: 'members',
    legendIndex: 2
}, {
    name: 'Female members',
    data: Female_members,
    stack: 'members',
    legendIndex: 1
},
{
    name: 'VLSA Orphans',
    data: vlsaOrphans,
    stack: 'dependents'
}, {
    name: 'Non-VLSA Orphans',
    data: nonVlsaOrphans,
    stack: 'dependents'
}, {
    name: 'VLSA Vulnerable Children',
    data: vlsaVulnChildren,
    stack: 'dependents'
}];

var people_averaged = [{
    name: 'Male members',
    data: Male_group,
    stack: 'members',
    legendIndex: 2
}, {
    name: 'Female members',
    data: Female_group,
    stack: 'members',
    legendIndex: 1
},
{
    name: 'VLSA Orphans',
    data: vlsaOrphans_group,
    stack: 'dependents'
}, {
    name: 'Non-VLSA Orphans',
    data: nonVlsaOrphans_group,
    stack: 'dependents'
}, {
    name: 'VLSA Vulnerable Children',
    data: vlsaVulnChildren_group,
    stack: 'dependents'
}];

$(function () {
    Highcharts.chart('vis-comparision', {

        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        exporting: {
            enabled: false
        },
        title: {
            text: 'Reported figures only, compounded assuming rest are zero'
        },
        subtitle: {
            text: 'Brush to zoom in, click on legend to toggle visibility'
        },
        xAxis: {
            categories: partner_country
        },
        yAxis: {
            title: {
                text: 'Average number of people per group'
            },
            stackLabels: {
                enabled: true
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: people_averaged
    });
    $('#people1').click(function () {
        console.log(series_averaged)
        Highcharts.chart('vis-comparision', {

            chart: {
                type: 'column',
                zoomType: 'xy'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: 'Reported figures only, compounded assuming rest are zero'
            },
            subtitle: {
                text: 'Brush to zoom in, click on legend to toggle visibility'
            },
            xAxis: {
                categories: partner_country
            },
            yAxis: {
                title: {
                    text: 'Average number of people per group'
                },
                stackLabels: {
                    enabled: true
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: people_averaged
        });
    });

    $('#people2').click(function () {
        console.log(series_total)
        Highcharts.chart('vis-comparision', {
            chart: {
                type: 'column',
                zoomType: 'xy'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: 'Reported figures only, compounded assuming rest are zero'
            },
            subtitle: {
                text: 'Brush to zoom in, click on legend to toggle visibility'
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            xAxis: {
                categories: partner_country
            },
            yAxis: {
                title: {
                    text: 'Total number of people in all groups'
                },
                stackLabels: {
                    enabled: true
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: people_total
        });
    });
});


var series_total = [{
    name: 'Dispersement (-)',
    data: Dispersement_USD,
    tooltip: {
        valuePrefix: '$'
    }

}, {
    name: 'Interest',
    data: Interest_USD,
    tooltip: {
        valuePrefix: '$'
    },
    legendIndex: 1

}, {
    name: 'Spendings (-)',
    data: Spendings_USD,
    tooltip: {
        valuePrefix: '$'
    }

}, {
    name: 'Lending recovery',
    data: Recovery_USD,
    tooltip: {
        valuePrefix: '$'
    }

}, {
    name: 'Net Profits',
    data: NetProfits_USD,
    tooltip: {
        valuePrefix: '$'
    }

}, {
    name: 'Liquidation',
    data: Liquidation_USD,
    tooltip: {
        valuePrefix: '$'
    }

}, {
    name: 'Welfare',
    data: Welfare_USD,
    tooltip: {
        valuePrefix: '$'
    }

}, {
    name: 'Welfare Savings',
    data: WelfareSavings_USD,
    tooltip: {
        valuePrefix: '$'
    }

}, {
    name: 'Cumulative Value',
    data: CumulativeValue_USD,
    tooltip: {
        valuePrefix: '$'
    },
    legendIndex: 0

}];

var series_averaged = [{
    name: 'Dispersement (-)',
    data: Dispersement_group,
    tooltip: {
        valuePrefix: '$'
    }
}, {
    name: 'Interest',
    data: Interest_group,
    tooltip: {
        valuePrefix: '$'
    },
    legendIndex: 1
}, {
    name: 'Spendings (-)',
    data: Spendings_group,
    tooltip: {
        valuePrefix: '$'
    }
}, {
    name: 'Lending recovery',
    data: Recovery_group,
    tooltip: {
        valuePrefix: '$'
    }
}, {
    name: 'Net Profits',
    data: NetProfits_group,
    tooltip: {
        valuePrefix: '$'
    }
}, {
    name: 'Liquidation',
    data: Liquidation_group,
    tooltip: {
        valuePrefix: '$'
    }
}, {
    name: 'Welfare',
    data: Welfare_group,
    tooltip: {
        valuePrefix: '$'
    }
}, {
    name: 'Welfare Savings',
    data: WelfareSavings_group,
    tooltip: {
        valuePrefix: '$'
    }
}, {
    name: 'Cumulative Value',
    data: CumulativeValue_group,
    tooltip: {
        valuePrefix: '$'
    },
    legendIndex: 0
}]

$(function () {
    var chart_fin = Highcharts.chart('vis-statistics', {

        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        exporting: {
            enabled: false
        },
        title: {
            text: 'Reported figures only, compounded assuming rest are zero'
        },
        subtitle: {
            text: 'Brush to zoom in, click on legend to toggle visibility'
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        xAxis: {
            categories: partner_country
        },
        yAxis: {
            title: {
                text: 'Average (Normalized) US dollars, per group'
            },
            stackLabels: {
                enabled: true
            }
            
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: series_averaged
    });
    $('#radio1').click(function() {
        console.log(series_averaged)
        Highcharts.chart('vis-statistics', {

            chart: {
                type: 'column',
                zoomType: 'xy'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: 'Reported figures only, compounded assuming rest are zero'
            },
            subtitle: {
                text: 'Brush to zoom in, click on legend to toggle visibility'
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            xAxis: {
                categories: partner_country
            },
            yAxis: {
                title: {
                    text: 'Average (Normalized) US dollars, per group'
                },
                labels: {
                    format: '${value}'
                },
                stackLabels: {
                    enabled: true
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: series_averaged
        });
    });

    $('#radio2').click(function() {
        console.log(series_total)
        Highcharts.chart('vis-statistics', {
            chart: {
                type: 'column',
                zoomType: 'xy'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: 'Reported figures only, compounded assuming rest are zero'
            },
            subtitle: {
                text: 'Brush to zoom in, click on legend to toggle visibility'
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            xAxis: {
                categories: partner_country
            },
            yAxis: {
                title: {
                    text: 'US dollars (Normalized), from all groups'
                },
                labels: {
                    format: '${value}'
                },
                stackLabels: {
                    enabled: true
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: series_total
        });
    });
});

