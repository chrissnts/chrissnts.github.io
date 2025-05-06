google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {

    var freqData = google.visualization.arrayToDataTable([
        ['Term', 'Frequency', { role: 'style' }],
        ['1st Term', 95, 'color: black'],
        ['2nd Term', 82, 'color: gray'],
        ['3rd Term', 76, 'color: black'],
        ['4th Term', 60, 'color: gray']
    ]);

    var freqOptions = {
        title: 'Frequency',
        chartArea: { width: '80%' },
        legend: 'none'
    };

    var freqChart = new google.visualization.BarChart(document.getElementById('frequency_chart'));
    freqChart.draw(freqData, freqOptions);

    var gradeData = google.visualization.arrayToDataTable([
        ['Grade', 'Amount'],
        ['A', 12],
        ['B', 8],
        ['C', 9],
        ['D', 6]
    ]);

    var gradeOptions = {
        title: 'GRADES',
        titleTextStyle: { color: '#000', bold: true, fontSize: 14 },
        legend: {
            position: 'right',
            alignment: 'center',
            textStyle: { color: '#000' }
        },
        pieSliceText: 'percentage',
        backgroundColor: '#ffffff',
        slices: {
            0: { color: '#dddddd' },
            1: { color: '#aaaaaa' },
            2: { color: '#555555' },
            3: { color: '#111111' }
        }
    };

    var gradeChart = new google.visualization.PieChart(document.getElementById('grade_chart'));
    gradeChart.draw(gradeData, gradeOptions);
}
