import { useContext, useEffect, useState } from 'react';
import '/resources/scss/assignment/Assignment.scss'
import Context from '../Context';
import DropDownMenu from './DropDownMenu';
import WorkingTimeBar from './WorkingTimeBar';
import EntryForm from './EntryForm';
import { convertNetWorkingTimeToMinutes } from '/resources/js/common/dateTimeConversion.js';


export default function Assignment() {

    const { state: { user, role, currentDate, currentDateFormated }, dispatch, getUser } = useContext(Context);
    const [selectedDate, setSelectedDate] = useState('')
    const [calculatedWorkingTimeInMinutes, setCalculatedWorkingTimeInMinutes] = useState(null)



    // current date has to be set here newly
    useEffect(() => {
        const date = new Date();
        const formatedDate = date.toLocaleDateString('en-CA')
        setSelectedDate(formatedDate);
    }, []);



    const loadCalculatedWorkingTime = async () => {
        // const response = await fetch('/api/calculatedAttendances/' + user.id + '/date/' + selectedDate)
        const response = await fetch('/api/calculatedAttendances/' + '23' + '/date/' + '2024-01-27')
        const data = await response.json();

        //conversion to minutes
        const timeString = data.calculatedAttendance[0].net_working_time
        const timeToMinutes = convertNetWorkingTimeToMinutes(timeString);
        setCalculatedWorkingTimeInMinutes(timeToMinutes);
    }

    useEffect(() => {
        loadCalculatedWorkingTime();

    }, [selectedDate])



    return (
        <div className='assignment'>
            <WorkingTimeBar calculatedWorkingTimeInMinutes={calculatedWorkingTimeInMinutes} />
            <DropDownMenu selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <EntryForm selectedDate={selectedDate} />

            {
                !user && (
                    <>
                        <div>Logg-in to have access tex1</div>
                        <div>Logg-in to have access text2</div>
                    </>
                )
            }


            {
                (user && user.role === 'employee') && (
                    <>
                        <div>Employee text1</div>
                        <div>Employee text2</div>
                    </>
                )
            }

            {
                (user && user.role === 'admin') && (
                    <>
                        <div>Admin1</div>
                        <div>Admin2</div>
                    </>
                )
            }

            {
                (user && user.role === 'project-leader') && (
                    <>
                        <div>Project leader text1</div>
                        <div>Project leader text2</div>
                    </>
                )
            }

            {
                (user && user.role === 'pivision-leader') && (
                    <>
                        <div>Division leader text1</div>
                        <div>Division leader text2</div>
                    </>
                )
            }
        </div>
    );
}
