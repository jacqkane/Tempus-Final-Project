import { useContext, useEffect, useState } from 'react';
import '/resources/scss/assignment/DropDownMenu.scss'
import Context from '../Context';






export default function DropDownMenu({ selectedDate, setSelectedDate }) {

    const { state: { user, role, currentDate, currentDateFormated }, dispatch, getUser } = useContext(Context);


    const handleDateSelection = (e) => {
        setSelectedDate(e.target.value)
    }

    return (

        <div className='drop-down-menu'>

            {
                <input type='date' defaultValue={selectedDate} onChange={handleDateSelection} />
            }

        </div>
    )
}