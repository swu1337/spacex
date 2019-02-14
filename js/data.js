let onboardCtx = document.querySelector('#onboard-canvas').getContext('2d');
let fuelCtx = document.querySelector('#fuel-canvas').getContext('2d');
let distanceCtx = document.querySelector('#distance-canvas').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Source Sans Pro';
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontStyle = 'bold';
Chart.defaults.global.layout = {
    padding: {
        top: 27,
        bottom: 27
    }
}

/*Hacks*/ 
Chart.plugins.register({
    id: 'paddingBelowLegends',
    beforeInit: function(chart, options) {
        chart.legend.afterFit = function() {
            this.height = this.height + 15;
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
        maintainAspectRatio: false
    }
});

let fuelPie = new Chart(fuelCtx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [77, 23],
            backgroundColor: [
                'rgba(240, 85, 36, 1)',
                'rgba(0, 0, 0, 0)'
            ],
            borderColor: 'rgba(0, 0, 0, 0)'
        }],
        labels: [
            'Fuel',
            ''
        ]
    },
    options: {
        maintainAspectRatio: false
    }
});

let distanceLine = new Chart(distanceCtx, {
    type: 'line',
    data: {
        labels: ["1h", "2h", "3h", "4h", "5h", "6h", "7h"],
        datasets: [{
            label: "Distance over time",
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
                left: 27,
                right: 27
            }
        }
    }
});
