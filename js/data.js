let ctx = document.getElementById('onboard-canvas').getContext('2d');

let myPieChart = new Chart(ctx,{
    type: 'pie',
    data: {
        datasets: [{
            data: [20, 120],
            backgroundColor: [
                'rgba(207, 92, 54, 1)',
                'rgba(17, 92, 54, 1)'
            ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
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
        }
    }
});
