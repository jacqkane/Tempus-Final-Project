import { useContext, useEffect, useState } from 'react';
import '/resources/scss/assignment/Assignment.scss'
import Context from '../Context';
import DropDownMenu from './DropDownMenu';
import WorkingTimeBar from './WorkingTimeBar';
import EntryForm from './EntryForm';
import AssignmentList from './AssignmentList';
import ClientHeader from '../common/ClientHeader';
import ClientFooter from '../common/ClientFooter';


export default function Assignment() {

    const { state: { user, role, currentDate, currentDateFormated }, dispatch, getUser } = useContext(Context);
    const [selectedDate, setSelectedDate] = useState('')
    // const [calculatedWorkingTimeInMinutes, setCalculatedWorkingTimeInMinutes] = useState(null)
    const [refreshList, setRefreshList] = useState(0);

    const [editFormId, setEditFormId] = useState(0)
    const [dayEntries, setDayEntries] = useState([]);

  
    // current date has to be set here newly
    useEffect(() => {
        const date = new Date();
        const formatedDate = date.toLocaleDateString('en-CA')
        setSelectedDate(formatedDate);
    }, []);



    // const loadCalculatedWorkingTime = async () => {
    //     // const response = await fetch('/api/calculatedAttendances/' + user.id + '/date/' + selectedDate)
    //     const response = await fetch('/api/calculatedAttendances/' + '23' + '/date/' + '2024-01-27')
    //     const data = await response.json();

    //     //conversion to minutes
    //     const timeString = data.calculatedAttendance[0].net_working_time
    //     const timeToMinutes = convertNetWorkingTimeToMinutes(timeString);
    //     setCalculatedWorkingTimeInMinutes(timeToMinutes);
    // }

    // useEffect(() => {
    //     loadCalculatedWorkingTime();

    // }, [selectedDate])



    return (
        <>
            <ClientHeader />
            <div className='assignment'>
                <DropDownMenu selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <WorkingTimeBar selectedDate={selectedDate} dayEntries={dayEntries} />
                <EntryForm selectedDate={selectedDate} refreshList={refreshList} setRefreshList={setRefreshList} editFormId={editFormId} setEditFormId={setEditFormId} />
                <AssignmentList selectedDate={selectedDate} refreshList={refreshList} setRefreshList={setRefreshList} setEditFormId={setEditFormId} dayEntries={dayEntries} setDayEntries={setDayEntries} />

                {/* {
                !user && (
                    <>
                        <div>Logg-in to have access tex1</div>
                       
                    </>
                )
            }


            {
                (user && user.role === 'employee') && (
                    <>
                        <div>Employee text1</div>
                        
                    </>
                )
            }

            {
                (user && user.role === 'admin') && (
                    <>
                        <div>Admin1</div>
                   
                    </>
                )
            }

            {
                (user && user.role === 'project-leader') && (
                    <>
                        <div>Project leader text1</div>
                        
                    </>
                )
            }

            {
                (user && user.role === 'pivision-leader') && (
                    <>
                        <div>Division leader text1</div>
                      
                    </>
                )
            } */}
            </div>
            <ClientFooter />
        </>
    );
}
