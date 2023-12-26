var barCount = 60;
var initialDateStr = '01 Apr 2023 00:00 Z';

var ctx = document.getElementById('chart').getContext('2d');
ctx.canvas.width = 800;
ctx.canvas.height = 400;

var barData = getRandomData(initialDateStr, barCount);

var chart = new Chart(ctx, {
    type: 'candlestick',
    data: {
        datasets: [
            {
                label: 'PLN - Curve',
                data: barData,
                backgroundColor: 'rgba(255, 0, 0, 0.5)', // Arka plan rengi
                borderColor: 'rgba(255, 0, 0, 1)', // Çerçeve rengi
                color: 'rgba(255, 0, 0, 1)', // Font rengi
            },
        ]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    color: '#FFB352', // Legend font rengi
                },
            },
        },
        scales: {
            y: {
                ticks: { color: '#FFB352', beginAtZero: true }
            },
            x: {
                ticks: { color: '#FFB352', beginAtZero: true }
            }
        }
    },
    plugins: [{
        beforeDraw: function (c) {
            var legends = c.legend.legendItems;
            legends.forEach(function (e) {
                e.fillStyle = '#FFB352'; // Background rengi
                e.strokeStyle = '#FFB352'; // Border rengi
            });
        },
    }],
});

Chart.defaults.plugins.legend.boxBackgroundColor = 'green';

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function randomBar(date, lastClose) {
    var open = +randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
    var close = +randomNumber(open * 0.95, open * 1.05).toFixed(2);
    var high = +randomNumber(Math.max(open, close), Math.max(open, close) * 1.1).toFixed(2);
    var low = +randomNumber(Math.min(open, close) * 0.9, Math.min(open, close)).toFixed(2);
    return {
        x: date.valueOf(),
        o: open,
        h: high,
        l: low,
        c: close,
    };
}

function getRandomData(dateStr, count) {
    var date = luxon.DateTime.fromRFC2822(dateStr);
    var data = [randomBar(date, 30)];
    while (data.length < count) {
        date = date.plus({ days: 1 });
        if (date.weekday <= 5) {
            data.push(randomBar(date, data[data.length - 1].c));
        }
    }
    return data;
}
