import '/resources/scss/reports/Report.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DropDownMenu from './DropDownMenu';
import BarChart from './ProjectChart';

export default function Report() {
    const [chartOptions, setChartOptions] = useState({});
    const [selectedOption, setSelectedOption] = useState('default'); // State to manage selected option

    useEffect(() => {
        const fetchDataAndCreateChart = async () => {
            try {
                const response = await axios.get('/api/working-time-assignments');
                const data = response.data;

                const options = createChartOptions(data);
                setChartOptions(options);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataAndCreateChart();
    }, []);

    const createChartOptions = (data) => {
        const projectTimes = {};

        // Aggregate working times for each project ID
        data.forEach(item => {
            const projectId = item.project_id;
            const workingTime = parseFloat(item.working_time_assigned);

            if (projectId in projectTimes) {
                projectTimes[projectId] += workingTime;
            } else {
                projectTimes[projectId] = workingTime;
            }
        });

        // Created series data from aggregated project times
        const seriesData = Object.entries(projectTimes).map(([projectId, totalTime]) => ({
            name: projectId,
            y: totalTime
        }));

        return {
            title: {
                text: 'Project ID'
            },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Project ID'
                }
            },
            yAxis: {
                title: {
                    text: 'Total Time'
                }
            },
            series: [{
                type: 'column',
                name: 'Total Working Time',
                data: seriesData
            }]
        };
    };

    // Function to handle option change
    const handleOptionChange = (option) => {
        setSelectedOption(option);
        // Update chart options based on selected option
        const updatedOptions = createChartOptions(option);
        setChartOptions(updatedOptions);
    };

    return (
        <div className='container'>
            {/* Pass handleOptionChange function to DropdownMenu */}
            <DropDownMenu onOptionChange={handleOptionChange} />
            <div className='reports'>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        </div>
    );
}