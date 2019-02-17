let onboardCtx = document.querySelector('#onboard-canvas').getContext('2d');
let fuelCtx = document.querySelector('#fuel-canvas').getContext('2d');
let distanceCtx = document.querySelector('#distance-canvas').getContext('2d');
let supplyCtx = document.querySelector('#supply-canvas').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Source Sans Pro';
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.legend.fontStyle = 'bold';
Chart.defaults.global.layout = {
    padding: {
        top: 27,
        bottom: 27
    }
}

/* Hacks Adding white space between legends and the graph */ 
Chart.plugins.register({
    id: 'paddingBelowLegends',
    beforeInit: function(chart, options) {
        chart.legend.afterFit = function() {
            this.height = this.height + 20;
        };
    }
});

let onboardPie = new Chart(onboardCtx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [20, 120],
            backgroundColor: [
                'rgba(14, 12, 11, 1)',
                'rgba(213, 28, 44, 1)'
            ],
            borderColor: 'rgba(0, 0, 0, 0)'
        }],
        labels: [
            'Crew',
            'Passengers'
        ]
    },
    options: {
        maintainAspectRatio: false,
        title : {
            display: true,
            text: 'Travelers on board',
            fontSize: 26
        }
    }
});

let fuelPie = new Chart(fuelCtx, {
    type: 'pie',
    data: {
        datasets: [{
            title: 'Fuel',
            data: [77, 23],
            backgroundColor: [
                'rgba(240, 85, 36, 1)',
                'rgba(0, 0, 0, 0.1)'
            ],
            borderColor: 'rgba(0, 0, 0, 0)'
        }],
        labels: [
            'Remaining',
            'Used'
        ]
    },
    options: {
        maintainAspectRatio: false,
        title : {
            display: true,
            text: 'Fuel Usage',
            fontSize: 26
        }
    }
});

let distanceLine = new Chart(distanceCtx, {
    type: 'line',
    data: {
        labels: ['1h', '2h', '3h', '4h', '5h', '6h', '7h'],
        datasets: [{
            label: "Distance over time",
            pointRadius: 4,
            pointBackgroundColor: 'rgba(58, 48, 35, 1)',
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgb(251, 196, 17)',
            data: [50, 70, 89, 92, 109, 112, 115]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: ((value, index, values) => `${value} km`)
                }
            }]
        },
        maintainAspectRatio: false,
        layout: {
            padding: {
                right: 20
            }
        },
        tooltips: {
            callbacks: {
                label: ((tooltipItems, data) => `${tooltipItems.yLabel} km`)
            }
        }
    }
});

let supplyBar = new Chart(supplyCtx, {
    type: 'bar',
    data: {
        labels: ['Food', 'Water', 'Oxygen'],
        datasets: [{
            label: 'Supply on board',
            data: [65, 59, 80],
            fill: false,
            backgroundColor: ['rgba(159, 226, 191, 1)', 'rgba(128, 204, 243, 1)', 'rgba(1, 141, 200, 1)'],
        }]
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 20
            }
        },
        scales: {
            yAxes: [{ 
                ticks : {
                    beginAtZero: true,
                    max: 100
                }
            }]
        },
        tooltips: {
            callbacks: {
                label: ((tooltipItems, data) => `${tooltipItems.yLabel}%`)
            }
        }
    }
});