import axios from "axios";
import { useEffect, useState } from "react";
import '/resources/scss/assignment/AssignmentList.scss';




export default function AssignmentList({ selectedDate, refreshList, setRefreshList, setEditFormId, dayEntries, setDayEntries }) {

    // const [dayEntries, setDayEntries] = useState([]);




    // dayEntries[0] ?
    //     console.log(dayEntries[0].approval_status.status_name)
    //     : console.log('Loading');

    const getEntriesSelectedDay = async () => {

        try {
            const response = await axios.post('/api/assignment/dayEntries', {
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

    }, [selectedDate, refreshList])

    const deleteEntry = async (id) => {

        try {
            const response = await axios.post('/api/assignment/delete-entry', {
                'id': id
            });
            // const response_data = await response.data;

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
        getEntriesSelectedDay();

        if (refreshList == 0) {
            setRefreshList(1)
        } else {
            setRefreshList(0)
        }
    }


    const handleDeleteOneEntry = (e) => {
        e.preventDefault();
        deleteEntry(e.target.value);

    }

    const handleEditOneEntry = (e) => {
        setEditFormId(e.target.value)
    }


    return (

        <div className="assignment-list">
            <table className="assignment-list__table">
                <thead >
                    <tr>
                        <th className="not-visible"></th>
                        <th>Project</th>
                        <th>RfQ</th>
                        <th>Code</th>
                        <th>Assigned</th>
                        <th>Comment</th>
                        <th>Approval</th>
                        <th className="not-visible"></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        dayEntries[0]?.id &&

                        dayEntries.map((entry) => {

                            return (
                                <tr key={entry.id}>
                                    <td className="not-visible">
                                        <button name="delete" value={entry.id} onClick={handleDeleteOneEntry}>-</button>
                                    </td>
                                    <td>{entry.project.project_number}</td>
                                    <td>{entry.rfq.rfq_number}</td>
                                    <td>{entry.cost_group.cost_group_code}</td>
                                    <td>{entry.working_time_assigned}</td>
                                    <td>{entry.comment}</td>
                                    <td>{entry.approval_status.status_name}</td>
                                    <td className="not-visible" >
                                        <button className="button-icon" name="edit" value={entry.id} onClick={handleEditOneEntry}>/</button>
                                    </td>
                                </tr>
                            )
                        })

                    }

                </tbody >
            </table>
        </div>

    );
}