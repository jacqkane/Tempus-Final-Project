import '/resources/scss/attendance/Attendance.scss'
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import Context from '../Context';
import ClientHeader from '../common/ClientHeader';
import ClientFooter from '../common/ClientFooter';

export default function Attendance() {
    const { state: { user, role, currentDateformatted }, dispatch } = useContext(Context)
    const [selectedDate, setSelectedDate] = useState(currentDateformatted)






    return (
        <>
        <ClientHeader />
        <div className='attendance'>
            Here comes Attendance
        </div>
        <ClientFooter />
        </>
    )
}