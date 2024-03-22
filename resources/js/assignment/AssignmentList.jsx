import axios from "axios";
import { useEffect, useState } from "react";
import '/resources/scss/assignment/AssignmentList.scss';



export default function AssignmentList({ selectedDate }) {

    const [dayEntries, setDayEntries] = useState([]);

    // dayEntries[0] ?
    //     console.log(dayEntries[0].approval_status.status_name)
    //     : console.log('Loading');

    const getEntriesSelectedDay = async () => {
        try {
            const response = await axios.post('http://www.tempus.test/api/assignment/dayEntries', {
                'day': selectedDate
            });
            const response_data = await response.data;
            setDayEntries(response_data);
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }
    }

    useEffect(() => {
        getEntriesSelectedDay();

    }, [selectedDate])


    return (

        <div className="assignment-list">
            <table className="assignment-list__table">
                <thead>
                    <tr>
                        <th>Project Number</th>
                        <th>RfQ Number</th>
                        <th>Type Code</th>
                        <th>Assigned Time</th>
                        <th>Comment</th>
                        <th>Approval Status</th>
                    </tr>
                </thead>

                <tbody>
                    {console.log(dayEntries)}
                    {console.log(dayEntries[0]?.id)}
                    {
                        dayEntries[0]?.id ?
                            dayEntries.map((entry) => (
                                <tr key={entry.id}>
                                    <td>{entry.project.project_number}</td>
                                    <td>{entry.rfq.rfq_number}</td>
                                    <td>{entry.cost_group.cost_group_code}</td>
                                    <td>{entry.working_time_assigned}</td>
                                    <td>{entry.comment}</td>
                                    <td>{entry.approval_status.status_name}</td>
                                </tr>
                            ))
                            : ''
                    }

                </tbody >
            </table>
        </div>

    );
}