import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const BarChart = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total Hours Spent on Projects'
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: 'Hours'
            }
        },
        series: [{
            name: 'Hours',
            data: []
        }]
    });

    useEffect(() => {
        axios.get('/api/working-time-assignments')
            .then(response => {
                const projects = response.data.map(item => item.projectName);
                const hours = response.data.map(item => item.hoursSpent);

                setChartOptions({
                    ...chartOptions,
                    xAxis: {
                        categories: projects
                    },
                    series: [{
                        name: 'Hours',
                        data: hours
                    }]
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    );
};

export default BarChart;