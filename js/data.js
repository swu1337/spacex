let onboardCtx = document.getElementById('onboard-canvas').getContext('2d');
let fuelCtx = document.getElementById('fuel-canvas').getContext('2d');

let onboardPie = new Chart(onboardCtx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [20, 120],
            backgroundColor: [
                'rgba(207, 92, 54, 1)',
                'rgba(17, 92, 54, 1)'
            ]
        }],
        labels: [
            'Crew',
            'Passengers'
        ]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 10,
                bottom: 10
            }
        },
        maintainAspectRatio: true
    }
});
let fuelPie = new Chart(fuelCtx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [90, 10],
            backgroundColor: [
                'rgba(207, 92, 54, 1)',
                'rgba(17, 92, 54, 0)'
            ]
        }],
        labels: [
            'Fuel',
            'Empty'
        ]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 10,
                bottom: 10
            }
        },
        maintainAspectRatio: true
    }
});
