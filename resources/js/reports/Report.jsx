import '/resources/scss/reports/Report.scss' 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CSVLink } from 'react-csv';


export default function Report() {
    const [projectChartOptions, setProjectChartOptions] = useState({});
    const [costGroupChartOptions, setCostGroupChartOptions] = useState({});
    const [approvalStatusChartOptions, setApprovalStatusChartOptions] = useState({});
    const [selectedOption, setSelectedOption] = useState('null'); 

    useEffect(() => {
        setSelectedOption(null); 

        const fetchDataAndCreateCharts = async () => {
            try {
                const response = await axios.get('/api/working-time-assignments');
                const data = response.data;

                const projectChartOpts = createProjectChartOptions(data);
                setProjectChartOptions(projectChartOpts);

                const costGroupChartOpts = createCostGroupChartOptions(data);
                setCostGroupChartOptions(costGroupChartOpts);

                const approvalStatusChartOpts = createApprovalStatusChartOptions(data);
                setApprovalStatusChartOptions(approvalStatusChartOpts);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataAndCreateCharts();
    }, []);

    const customizeChartBackground = (chartOptions) => {
        if (chartOptions.chart) {
            chartOptions.chart.backgroundColor = {
                stops: [
                    [0, '#87afc4'],
                ]
            };
            chartOptions.chart.plotBackgroundColor = '#9c3';
            chartOptions.chart.plotBorderWidth = 1;
            chartOptions.colors = '#9c3';
            
    
            
            if (chartOptions.xAxis && !chartOptions.xAxis.labels) {
                chartOptions.xAxis.labels = {};
            }
            if (chartOptions.xAxis.labels) {
                chartOptions.xAxis.labels.style = {
                    color: '#ffffff' 
                };
            }
    
            if (chartOptions.yAxis && !chartOptions.yAxis.labels) {
                chartOptions.yAxis.labels = {};
            }
            if (chartOptions.yAxis.labels) {
                chartOptions.yAxis.labels.style = {
                    color: '#ffffff' 
                };
            }
        }

        return chartOptions;
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const createProjectChartOptions = (data) => {
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
    
        const seriesData = Object.entries(projectTimes).map(([projectId, totalTime]) => ({
            name: projectId,
            y: totalTime
        }));
    
        return {
            seriesData,
            chart: {
                type: 'column'
            },
            title: {
                text: 'Working Time Assigned Per Project'
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
                name: 'Total Working Time',
                data: seriesData
            }]
        };
    };
    
    const createCostGroupChartOptions = (data) => {
        const costGroupTimes = {};
    
        // Aggregate working times for each cost group
        data.forEach(item => {
            const costGroup = item.cost_group_id;
            const workingTime = parseFloat(item.working_time_assigned);
    
            if (costGroup in costGroupTimes) {
                costGroupTimes[costGroup] += workingTime;
            } else {
                costGroupTimes[costGroup] = workingTime;
            }
        });
    
        const seriesData = Object.entries(costGroupTimes).map(([costGroup, totalTime]) => ({
            name: costGroup,
            y: totalTime
        }));
    
        return {
            seriesData,
            chart: {
                type: 'column'
            },
            title: {
                text: 'Working Time Assigned Per Cost Group'
            },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Cost Group'
                }
            },
            yAxis: {
                title: {
                    text: 'Total Time'
                }
            },
            series: [{
                name: 'Total Working Time',
                data: seriesData
            }]
        };
    };
    

    const createApprovalStatusChartOptions = (data) => {
        const approvalStatusTimes = {};
    
        // Aggregate working times for approval status IDs 1, 2, and 3
        const filteredData = data.filter(item => [1, 2, 3].includes(item.approval_status_id));
        filteredData.forEach(item => {
            const workingTime = parseFloat(item.working_time_assigned);
    
            if (item.approval_status_id in approvalStatusTimes) {
                approvalStatusTimes[item.approval_status_id] += workingTime;
            } else {
                approvalStatusTimes[item.approval_status_id] = workingTime;
            }
        });
    
        // Convert total data into Highcharts series format
        const seriesData = Object.entries(approvalStatusTimes).map(([approvalStatusId, totalTime]) => ({
            name: `Approval Status ID ${approvalStatusId}`,
            y: totalTime
        }));
    
        return {
            seriesData,
            chart: {
                type: 'column'
            },
            title: {
                text: 'Working Time Assigned by Approval Status'
            },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Approval Status ID'
                }
            },
            yAxis: {
                title: {
                    text: 'Total Time'
                }
            },
            series: [{
                name: 'Total Working Time',
                data: seriesData 
            }]
        };
    };

const handleBackToCharts = () => {
    setSelectedOption(null);
};


return (
    <div id='container' style={{ width: '100%', maxWidth: '1200px' }}>
        <div className='reports'>
            {(selectedOption === null || selectedOption === 'all') && (
                <div className='button-container'>
                    <button className='report-button' onClick={() => handleOptionChange('project')}>Project Chart</button>
                    <button className='report-button' onClick={() => handleOptionChange('costGroup')}>Cost Group Chart</button>
                    <button className='report-button' onClick={() => handleOptionChange('approvalStatus')}>Approval Status Chart</button>
                    <button className='report-button' onClick={() => handleOptionChange('all')}>All Charts</button>
                </div>
            )}
            {selectedOption && (
                <button className="back-to-charts-button" onClick={handleBackToCharts}>Back to Chart Options</button>
            )}

            {(selectedOption === 'project' || selectedOption === 'all') && (
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={customizeChartBackground(projectChartOptions)}
                    />
                    <CSVLink
                        data={projectChartOptions.seriesData}
                        filename={"project_data.csv"}
                        className="custom-csv-link"
                        target="_blank"
                    >
                        Download CSV
                    </CSVLink>
                </div>
            )}
            {(selectedOption === 'costGroup' || selectedOption === 'all') && (
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={customizeChartBackground(costGroupChartOptions)}
                    />
                    <CSVLink
                        data={costGroupChartOptions.seriesData}
                        filename={"cost_group_data.csv"}
                        className="custom-csv-link"
                        target="_blank"
                    >
                        Download CSV
                    </CSVLink>
                </div>
            )}
            {(selectedOption === 'approvalStatus' || selectedOption === 'all') && (
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={customizeChartBackground(approvalStatusChartOptions)}
                    />
                    <CSVLink
                        data={approvalStatusChartOptions.seriesData}
                        filename={"approval_status_data.csv"}
                        className="custom-csv-link"
                        target="_blank"
                    >
                        Download CSV
                    </CSVLink>
                </div>
            )}
        </div>
    </div>
);
}