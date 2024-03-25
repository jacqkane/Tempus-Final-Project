import { useContext, useEffect, useState } from 'react';
import Context from '../Context';
import '/resources/scss/attendance/AttendanceList.scss';
import axios from 'axios';


export default function AttendanceList() {

    const { state: { user, role, currentDate }, dispatch } = useContext(Context)
    const [selectedDate, setSelectedDate] = useState('')
    const [dayAttendancies, setDayAttendancies] = useState([]);

    const [allStampTypes, setAllStampTypes] = useState([]);
    const [attendanceData, setAttendanceData] = useState([]);



    const [entryValues, setEntryValues] = useState({
        internal_attendance_id: 0,
        stamp_action_id: 0,
        stamp_action_name: '',
        date: '',
        time: '',
    });

    const resetEntryValues = () => {
        setEntryValues(previous_values => {
            return ({
                ...previous_values,
                internal_attendance_id: 0,
                stamp_action_id: 0,
                stamp_action_name: '',
                date: '',
                time: '',
            });
        });
    }

    // initial setup
    useEffect(() => {
        setSelectedDate(currentDate);
        getAllStampTypes();
    }, [currentDate])


    const loadDayAttendancies = async () => {
        try {
            const response = await axios.post('http://www.tempus.test/api/attendance/day-attendancies', {
                'day': selectedDate
            });
            const response_data = await response.data;
            setDayAttendancies(response_data);

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
    //load automatically when new day is selected
    useEffect(() => {
        loadDayAttendancies();
    }, [selectedDate])

    //sets new selelected day according to date selection bar
    const handleDateSelection = (e) => {
        setSelectedDate(e.target.value)
    }

    // getting all stamp action types for selection drop down menu
    const getAllStampTypes = async () => {
        try {
            const response = await axios.get('http://www.tempus.test/api/attendance/all-stamp-types');
            const response_data = await response.data;
            let tempArray = [];
            response_data.map((elem, i) => {
                tempArray.push(elem.name);
            })
            setAllStampTypes(tempArray);
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

    const handleFormChange = (e) => {
        setEntryValues(previous_values => {
            return ({
                ...previous_values,
                [e.target.name]: e.target.value
            });
        });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://www.tempus.test/api/attendance/entry', entryValues);
            const response_data = await response.data;
            resetEntryValues()
            loadDayAttendancies()

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


    // deletion of one attendace entry according to attendance_id which shall be set
    const handleDeleteOneAttendance = async (id) => {
        try {
            const response = await axios.post('http://www.tempus.test/api/attendance/delete-entry', {
                'id': id
            });
            const response_data = await response.data;

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
        loadDayAttendancies();
    }


    const handleEditOneAttendance = async (id) => {

        try {
            const response = await axios.post('http://www.tempus.test/api/attendace/edit-query', {
                'internal_attendance_id': id
            });
            const response_data = await response.data;

            setAttendanceData(response_data);

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
        attendanceData[0] &&
            setEntryValues(previous_values => {
                return ({
                    ...previous_values,
                    internal_attendance_id: attendanceData[0].id,
                    stamp_action_id: 0,
                    stamp_action_name: attendanceData[0].stamp_action.name,
                    date: attendanceData[0].date,
                    time: attendanceData[0].time,
                });
            });

    }, [attendanceData])



    return (
        <div className='attendance-list'>

            <div className='attendance-list__selection'>
                {
                    <input type='date' defaultValue={selectedDate} onChange={handleDateSelection} />
                }
            </div>

            <div className='attendance-list__divform'>

                <form className="attendance-list__divform__form" action="" method="POST" onSubmit={handleFormSubmit}>

                    <button className="form__button" type="submit">Submit Change</button><br />

                    <div className="form__row">
                        <div className="form__row__input-group">
                            <label htmlFor="date">Day</label>
                            <input id="date" type="text" name="date" value={entryValues.date} onChange={handleFormChange} />
                        </div>

                        <div className="form__row__input-group">
                            <label htmlFor="stamp_action_name">Stamp Type</label>
                            <select name="stamp_action_name" id="stamp_action_name" value={entryValues.stamp_action_name} onChange={handleFormChange}>
                                {/* <option value={entryValues.stamp_action_name}>{entryValues.stamp_action_name}</option> */}
                                <option value={0}>{'select'}</option>
                                {
                                    allStampTypes.map((code) => {
                                        return <option key={code} value={code}>{code}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="form__row__input-group">
                            <label htmlFor="time">Time</label>
                            <input id="time" type="text" name="time" value={entryValues.time} onChange={handleFormChange} />
                        </div>
                    </div>


                </form>

            </div>

            <div className='attendance-list__list'>

                <table className="attendance-list__list__table">
                    <thead >
                        <tr>
                            <th></th>
                            <th>Day</th>
                            <th>Stamp Type</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            // dayAttendancies[0]?.stamp_action?.name &&
                            dayAttendancies.length > 0 ?
                                dayAttendancies.map((attendance) => {

                                    return (

                                        <tr key={attendance.id}>
                                            <td>
                                                <button name="delete" onClick={() => handleDeleteOneAttendance(attendance.id)}>-</button>
                                            </td>
                                            <td>{attendance.date}</td>

                                            <td>{attendance.stamp_action ? attendance.stamp_action.name : 'Unknown'}</td>

                                            {/* <td>{attendance.stamp_action_id}</td> */}

                                            <td>{attendance.time}</td>

                                            <td>
                                                <button name="edit" onClick={() => handleEditOneAttendance(attendance.id)}>/</button>
                                            </td>
                                        </tr>
                                    )
                                }) : ''



                        }

                    </tbody >
                </table>
            </div>
        </div>
    )
}