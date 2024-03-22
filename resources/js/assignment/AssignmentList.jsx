import axios from "axios";
import { useEffect, useState } from "react";
import '/resources/scss/assignment/AssignmentList.scss';
import { useNavigate } from 'react-router-dom';



export default function AssignmentList({ selectedDate, refreshList, setEditFormId, dayEntries, setDayEntries }) {
    const navigate = useNavigate();
    // const [dayEntries, setDayEntries] = useState([]);




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

    }, [selectedDate, refreshList])

    const deleteEntry = async (id) => {
        try {
            const response = await axios.post('http://www.tempus.test/api/assignment/delete-entry', {
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
                        <th></th>
                        <th>Project Number</th>
                        <th>RfQ Number</th>
                        <th>Type Code</th>
                        <th>Assigned Time</th>
                        <th>Comment</th>
                        <th>Approval Status</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        dayEntries[0]?.id &&

                        dayEntries.map((entry) => {

                            return (
                                <tr key={entry.id}>
                                    <td>
                                        <button name="delete" value={entry.id} onClick={handleDeleteOneEntry}>-</button>
                                    </td>
                                    <td>{entry.project.project_number}</td>
                                    <td>{entry.rfq.rfq_number}</td>
                                    <td>{entry.cost_group.cost_group_code}</td>
                                    <td>{entry.working_time_assigned}</td>
                                    <td>{entry.comment}</td>
                                    <td>{entry.approval_status.status_name}</td>
                                    <td>
                                        <button name="edit" value={entry.id} onClick={handleEditOneEntry}>/</button>
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