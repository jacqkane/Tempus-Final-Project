import { useContext, useEffect, useState } from 'react';
import Context from '../Context';
import '/resources/scss/attendance/AttendanceList.scss';
import axios from 'axios';
import ClientHeader from '../common/ClientHeader';
import ClientFooter from '../common/ClientFooter';


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
            // console.log(selectedDate, currentDate)
            const response = await axios.post('/api/attendance/day-attendancies', {

                'day': selectedDate ?? currentDate
            });
            const response_data = await response.data;
            // console.log(response_data)

            if (response_data.dayAttendancies.length > 0) {
                setDayAttendancies(response_data.dayAttendancies);
            }

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
            const response = await axios.get('/api/attendance/all-stamp-types');
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
            const response = await axios.post('/api/attendance/entry', entryValues);
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
            const response = await axios.post('/api/attendance/delete-entry', {
                'id': id,
                'date': selectedDate
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
            const response = await axios.post('/api/attendace/edit-query', {
                'internal_attendance_id': id,
                'date': selectedDate
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
        <>
            <ClientHeader />
            <div className='attendance-list'>

                <div className='attendance-list__selection'>
                    {
                        <input className='attendance-list__selection__input' type='date' defaultValue={selectedDate} onChange={handleDateSelection} />
                    }
                </div>

                <div className='attendance-list__divform'>

                    <form className="attendance-list__divform__form" action="" method="POST" onSubmit={handleFormSubmit}>
                        <div className="center-button">
                            <button className="form__button" type="submit">Submit Change</button><br />
                        </div>
                        <div className="form__row">
                            <div className="form__row__input-group">
                                <label htmlFor="date">Day</label>
                                <input id="date" type="text" name="date" value={entryValues.date} onChange={handleFormChange} />
                            </div>

                            <div className="form__row__input-group">
                                <label htmlFor="stamp_action_name">Action</label>
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
                    {
                        dayAttendancies.length > 0 ?

                            <table className="attendance-list__list__table">
                                <thead >
                                    <tr>
                                        <th className="not-visible"></th>
                                        <th>Day</th>
                                        <th>Action</th>
                                        <th>Time</th>
                                        <th className="not-visible"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        dayAttendancies.map((attendance) => {

                                            return (
                                                <tr key={attendance.id}>
                                                    <td className="not-visible">
                                                        <button name="delete" onClick={() => handleDeleteOneAttendance(attendance.id)}>-</button>
                                                    </td>
                                                    <td>{attendance.date}</td>

                                                    <td>{attendance.stamp_action ? attendance.stamp_action.name : 'Unknown'}</td>

                                                    <td>{attendance.time}</td>

                                                    <td className="not-visible">
                                                        <button className="button-icon" name="edit" onClick={() => handleEditOneAttendance(attendance.id)}>/</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody >
                            </table>
                            : ''
                    }
                </div>
            </div>

            <ClientFooter />
        </>
    )
}