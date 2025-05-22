function drawChart() {

    var freqData = google.visualization.arrayToDataTable([
        ['Term', 'Frequency', { role: 'style' }],
        ['Agentes', , 'color: #ADD8E6'],
        ['Assuntos', 82, 'color: #ADD8E6'],
        ['Regionais', 76, 'color: #ADD8E6'],
        ['Relatórios', 60, 'color: #ADD8E6']
    ]);

    var freqOptions = {
        title: '',
        chartArea: { width: '80%' },
        legend: 'none'
    };

    var freqChart = new google.visualization.ColumnChart(document.getElementById('chart'));
    freqChart.draw(freqData, freqOptions);
}