import { useEffect, useState } from "react";
import { convertMinutesToTimeHHmm } from '/resources/js/common/dateTimeConversion.js'
import '/resources/scss/assignment/WorkingTimeBar.scss'
import { convertNetWorkingTimeToMinutes } from '/resources/js/common/dateTimeConversion.js';


export default function WorkingTimeBar({ selectedDate, refreshList, dayEntries }) {


    const [calculatedWorkingTimeInMinutes, setCalculatedWorkingTimeInMinutes] = useState(null);
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
        // const response = await fetch('/api/calculatedAttendances/' + user.id + '/date/' + selectedDate)
        const response = await fetch('/api/calculatedAttendances/' + '23' + '/date/' + '2024-01-27')
        const data = await response.json();

        //conversion to minutes
        const timeString = data.calculatedAttendance[0].net_working_time
        const timeToMinutes = convertNetWorkingTimeToMinutes(timeString);
        setCalculatedWorkingTimeInMinutes(timeToMinutes);
    }
    const calculateDayEntriesMinutes = () => {
        let sumMinutes = 0;
        dayEntries.map((elem) => {
            const elemMinutes = convertNetWorkingTimeToMinutes(elem.working_time_assigned);
            sumMinutes += elemMinutes;
        });
        setAssignedSumMinutes(sumMinutes);
    }

    const calculateRestToAssignMinutes = () => {
        const delta = calculatedWorkingTimeInMinutes - assignedSumMinutes;
        setrestToAssignMinutes(delta);
    }

    function convertMinutesToTime() {
        setCalculatedWorkingTimeformatted(convertMinutesToTimeHHmm(calculatedWorkingTimeInMinutes));
        setAssignedSumformatted(convertMinutesToTimeHHmm(assignedSumMinutes));
        setRestToAssignformatted(convertMinutesToTimeHHmm(restToAssignMinutes));
    }

    useEffect(() => {
        loadCalculatedWorkingTime();
        calculateDayEntriesMinutes();
        calculateRestToAssignMinutes();
        convertMinutesToTime();

    }, [selectedDate, refreshList, dayEntries])



    return (
        <div className="working-time-bar">
            <div>{'Working Day Total ' + calculatedWorkingTimeformatted}</div>
            <div>{'Assigned sum ' + assignedSumformatted}</div>
            <div>{'Delta ' + restToAssignformatted}</div>
        </div>

    )
}