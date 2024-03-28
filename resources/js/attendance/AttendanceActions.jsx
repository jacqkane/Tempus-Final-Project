import '/resources/scss/attendance/AttendanceActions.scss'
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import Context from '../Context';
import axios from 'axios';
import { formatTimeHHMMSS, formatDateToYYYYMMDD, convertMinutesToTimeHHmm } from '/resources/js/common/dateTimeConversion.js';
import ClientHeader from '../common/ClientHeader';
import ClientFooter from '../common/ClientFooter';

export default function AttendanceActions() {
    const { state: { user, role, currentDate }, dispatch } = useContext(Context)
    const [selectedDate, setSelectedDate] = useState('')


    const [currentStatus, setCurrentStatus] = useState('...')
    const [sumWorkingTimeFormatted, setSumWorkingTimeFormatted] = useState('...')
    const [sumBreaksFormatted, setSumBreaksFormatted] = useState('...')

    const [clicked, setClicked] = useState(0)
    const [attendanceId, setAttendanceId] = useState(0);
    const [attendanceValues, setAttendanceValues] = useState({
        internal_attendance_id: 0,
        stamp_action_id: 0,
        date: null,
        time: null
    });

    const [dayAttendancies, setDayAttendancies] = useState([]);


    // console.log(dayAttendancies)

    const resetattendanceValues = () => {
        setAttendanceValues(previous_values => {
            return ({
                ...previous_values,
                internal_attendance_id: 0,
                stamp_action_id: 0,
                date: null,
                time: null
            });
        });
    }

    const initialSetup = () => {
        setSelectedDate(currentDate);
        loadDayAttendancies();
    }

    useEffect(() => {
        initialSetup();
    }, [currentDate])

    //saving stamp action
    const handleAction = (id) => {
        setClicked(0);
        setAttendanceValues(previous_values => {
            const newDate = new Date();
            return ({
                ...previous_values,
                internal_attendance_id: attendanceId,
                stamp_action_id: id,
                stamp_action_name: '',
                date: formatDateToYYYYMMDD(newDate),
                time: formatTimeHHMMSS(newDate),
            });
        });
        setClicked(1)
    }

    useEffect(() => {
        if (clicked === 1) {
            sendAttendanceEntryValues();
            setClicked(0);
        }
    }, [clicked]);

    const sendAttendanceEntryValues = async () => {
        try {
            const response = await axios.post('/api/attendance/entry', attendanceValues);
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
        resetattendanceValues();
        loadDayAttendancies();
    }


    const loadDayAttendancies = async () => {
        try {
            const response = await axios.post('/api/attendance/day-attendancies', {
                'day': currentDate
            });
            const response_data = await response.data;
            setDayAttendancies(response_data.dayAttendancies);

            setSumWorkingTimeFormatted(convertMinutesToTimeHHmm(response_data.CalculationResult.netWorkingTimeInMinutes));
            setSumBreaksFormatted(convertMinutesToTimeHHmm(response_data.CalculationResult.netSumBreaksInMinutes));
            setCurrentStatus(response_data.CalculationResult.statusMessage);

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

    // const creatingStatusData =()


    return (
        <>
            <ClientHeader />
            <div className='attendance-actions'>

                <div className='attendance-actions__status-bar'>
                    <div className='attendance-actions__status-bar__group'>
                        {
                            <div className='attendance-actions__status-bar__group__info'>
                                Today is:<span>{selectedDate}</span>
                            </div>
                        }
                        <div className='attendance-actions__status-bar__group__current-status'>
                            Status:<span>{currentStatus}</span>
                        </div>
                        <div className='attendance-actions__status-bar__group__sum-working-time'>
                            Sum Working <span>{sumWorkingTimeFormatted}</span>
                        </div>
                        <div className='attendance-actions__status-bar__group__sum-breaks'>
                            Sum Breaks:<span>{sumBreaksFormatted}</span>
                        </div>
                    </div>

                </div>

                <div className='attendance-actions__action-buttons'>
                    <div className='attendance-actions__action-buttons__clock'>
                        <button className='attendance-actions__action-buttons__clock__in' onClick={() => handleAction(1)}>
                            <p>Clock-In</p>
                        </button>

                        <div className='attendance-actions__action-buttons__clock__out' onClick={() => handleAction(2)}>
                            <p>Clock-Out</p>
                        </div>
                    </div>

                    <div className='attendance-actions__action-buttons__break'>
                        <div className='attendance-actions__action-buttons__break__start' onClick={() => handleAction(3)}>
                            <p>Break-Start</p>
                        </div>
                        <div className='attendance-actions__action-buttons__break__stop' onClick={() => handleAction(4)}>
                            <p>Break-Stop</p>
                        </div>

                    </div>


                </div>

            </div>
            <ClientFooter />
        </>
    )
}