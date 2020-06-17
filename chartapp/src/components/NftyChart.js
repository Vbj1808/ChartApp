import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const NftyChart = ({nftyStock,nftyStockName}) => {
    console.log(nftyStock.nftyChartCloseData);
    console.log(nftyStock.nftyChartXData);
    
    var ohlc = [],
        volume = [],
        dataLength = nftyStock.nftyChartCloseData.length,
        i = 0;
    
    console.log(dataLength);
    
    console.log(nftyStock.nftyChartXData[0]);


    for(i=dataLength; i>0; i-=1){
        ohlc.push([
            nftyStock.nftyChartXData[i],
            nftyStock.nftyChartOpenData[i],
            nftyStock.nftyChartHighData[i],
            nftyStock.nftyChartLowData[i],
            nftyStock.nftyChartCloseData[i]
        ]);

        volume.push([
            nftyStock.nftyChartXData[i],
            nftyStock.nftyChartVolumeData[i]
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
            id: `{nftyStock.symbol}-ohlc`,
            name: nftyStock.symbol,
            data: ohlc,
        },{
            type: 'column',
            id: `{dailyStock.symbol}-volume`,
            name: nftyStock.symbol,
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

NftyChart.propTypes = {
    nftyStock: PropTypes.object.isRequired,
    nftyStockName: PropTypes.string.isRequired,
}

export default NftyChart;