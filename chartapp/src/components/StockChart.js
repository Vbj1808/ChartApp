import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const StockChart = ({dailyStock,dailyStockName}) => {
    console.log(dailyStock.stockChartCloseData);
    console.log(dailyStock.stockChartXData);
    
    var ohlc = [],
        volume = [],
        dataLength = dailyStock.stockChartXData.length,
        i = 0;
    
    console.log(dataLength);
    
    console.log(dailyStock.stockChartXData[0]);


    for(i=dataLength; i>0; i-=1){
        ohlc.push([
            dailyStock.stockChartXData[i],
            dailyStock.stockChartOpenData[i],
            dailyStock.stockChartHighData[i],
            dailyStock.stockChartLowData[i],
            dailyStock.stockChartCloseData[i]
        ]);

        volume.push([
            dailyStock.stockChartXData[i],
            dailyStock.stockChartVolumeData[i]
        ]);
    }

    

    const options = {

        yAxis:[{
            labels: {
                align: 'left'
            },
            height: '80%',
            resize: {
                enabled: true 
            }

        }, {
            labels: {
                align: 'left'
            },
            top: '80%',
            height: '20%',
            offset: 0
        }],

        tooltip: {
            shape: 'square',
            headerShape: 'callout',
            borderWidth: 0,
            shadow: false,
            positioner: function (width, height, point) {
                var chart = this.chart,
                    position;

                if (point.isHeader) {
                    position = {
                        x: Math.max(
                            // Left side limit
                            chart.plotLeft,
                            Math.min(
                                point.plotX + chart.plotLeft - width / 2,
                                // Right side limit
                                chart.chartWidth - width - chart.marginRight
                            )
                        ),
                        y: point.plotY
                    };
                } else {
                    position = {
                        x: point.series.chart.plotLeft,
                        y: point.series.yAxis.top - chart.plotTop
                    };
                }

                return position;
            }
        },        
        series: [{
            type: 'ohlc',
            id: `{dailyStock.symbol}-ohlc`,
            name: `{dailyStock.symbol} Stock Price`,
            data: ohlc,
        },{
            type: 'column',
            id: `{dailyStock.symbol}-volume`,
            name: `{dailyStock.symbol} Volume`,
            data: volume,
            yAxis: 1
        }
            // turboThreshold: 10000
        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 800
                },
                chartOptions: {
                    rangeSelector: {
                        inputEnabled: false
                    }
                }
            }]
        }
    }
    
    return(
        <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} allowChartUpdate = { true } options={options} />
        
    )
}

StockChart.propTypes = {
    dailyStock: PropTypes.object.isRequired,
    dailyStockName: PropTypes.string.isRequired,
}

export default StockChart;