/**
 * Sample for Area Series
 */

    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryYAxis: {
            valueType: 'DateTime',
            labelFormat: 'y',
            majorGridLines: { width: 0 },
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary Y Axis
        primaryXAxis: {
            maximum: 10, interval: 1,
            labelFormat: '{value}%',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: [
                    { y: new Date(2002, 0, 1), x: -2.2 }, { y: new Date(2003, 0, 1), x: 3.4 },
                    { y: new Date(2004, 0, 1), x: 1 }, { y: new Date(2005, 0, 1), x: 1.6 },
                    { y: new Date(2006, 0, 1), x: 2.3 }, { y: new Date(2007, 0, 1), x: 2.5 },
                    { y: new Date(2008, 0, 1), x: 2.9 }, { y: new Date(2009, 0, 1), x: 3.8 },
                    { y: new Date(2010, 0, 1), x: 1.4 }, { y: new Date(2011, 0, 1), x: 3.1 }
                ],
                name: 'Test', xName: 'x', yName: 'y', type: 'Area',
                border: { color: 'transparent' },
                opacity: 0.5
            },
        
        ],
        //Initializing Chart title
        title: 'Test',
        width: ej.base.Browser.isDevice ? '100%' : '60%',

    });
    chart.appendTo('#container');
