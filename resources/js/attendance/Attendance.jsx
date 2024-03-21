import '/resources/scss/attendance/Attendance.scss'
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import Context from '../Context';

export default function Attendance() {
    const { state: { user, role, currentDateformatted }, dispatch } = useContext(Context)
    const [selectedDate, setSelectedDate] = useState(currentDateformatted)






    return (


        <div className='attendance'>
            Here comes Attendance
        </div>
    )
}