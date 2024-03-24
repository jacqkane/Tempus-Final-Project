import { useEffect, useState } from "react";
import { convertMinutesToTimeHHmm } from '/resources/js/common/dateTimeConversion.js'
import '/resources/scss/assignment/WorkingTimeBar.scss'
import { convertNetWorkingTimeToMinutes } from '/resources/js/common/dateTimeConversion.js';


export default function WorkingTimeBar({ selectedDate, refreshList, dayEntries }) {
    const [loadedAssignedTime, setLoadedAssignedTime] = useState(false);
    const [loadedWorkingTime, setLoadedWorkingTime] = useState(false);

    const [calculatedWorkingTimeInMinutes, setCalculatedWorkingTimeInMinutes] = useState(0);
    const [assignedSumMinutes, setAssignedSumMinutes] = useState(0);
    const [restToAssignMinutes, setrestToAssignMinutes] = useState(0);

    const [calculatedWorkingTimeformatted, setCalculatedWorkingTimeformatted] = useState('');
    const [assignedSumformatted, setAssignedSumformatted] = useState('');
    const [restToAssignformatted, setRestToAssignformatted] = useState('');


    const [toRender, setToRender] = useState(0)

    console.log(calculatedWorkingTimeInMinutes);
    console.log(assignedSumMinutes);
    console.log(restToAssignMinutes);

    const loadCalculatedWorkingTime = async () => {
        setLoadedWorkingTime(false);
        // const response = await fetch('/api/calculatedAttendances/' + user.id + '/date/' + selectedDate)
        const response = await fetch('/api/calculatedAttendances/' + '23' + '/date/' + '2024-01-27')
        const data = await response.json();

        //conversion to minutes
        const timeString = data.calculatedAttendance[0].net_working_time
        const timeToMinutes = convertNetWorkingTimeToMinutes(timeString);
        setCalculatedWorkingTimeInMinutes(timeToMinutes);
        //conversion to output format
        setCalculatedWorkingTimeformatted(convertMinutesToTimeHHmm(timeToMinutes));
        setLoadedWorkingTime(true);
    }
    // will be updated when day changes
    useEffect(() => {
        loadCalculatedWorkingTime();
    }, [selectedDate])



    const calculateDayEntriesMinutes = () => {
        setLoadedAssignedTime(false)
        let sumMinutes = 0;
        dayEntries.map((elem) => {
            const elemMinutes = convertNetWorkingTimeToMinutes(elem.working_time_assigned);
            sumMinutes += elemMinutes;
        });
        setAssignedSumMinutes(sumMinutes);
        setAssignedSumformatted(convertMinutesToTimeHHmm(sumMinutes));
        setLoadedAssignedTime(true)
    }
    // will be updated when day entries are refreshed
    useEffect(() => {
        calculateDayEntriesMinutes();
    }, [dayEntries])




    const calculateRestToAssignMinutes = () => {
        const delta = calculatedWorkingTimeInMinutes - assignedSumMinutes;
        setrestToAssignMinutes(delta);
        setRestToAssignformatted(convertMinutesToTimeHHmm(delta));
    }

    useEffect(() => {
        calculateRestToAssignMinutes();
    }, [loadedAssignedTime, loadedWorkingTime])


    return (
        <div className="working-time-bar">
            <div>{'Working Day Total ' + calculatedWorkingTimeformatted}</div>
            <div>{'Assigned sum ' + assignedSumformatted}</div>
            <div>{'Delta ' + restToAssignformatted}</div>
        </div>

    )
}