import { useContext, useEffect, useState } from "react";
import { convertMinutesToTimeHHmm } from '/resources/js/common/dateTimeConversion.js'
import '/resources/scss/assignment/WorkingTimeBar.scss'
import { convertNetWorkingTimeToMinutes } from '/resources/js/common/dateTimeConversion.js';
import Context from "../Context";
import axios from "axios";


export default function WorkingTimeBar({ selectedDate, dayEntries }) {

    const { state: { user, role, currentDate }, dispatch } = useContext(Context)

    const [calculateRestTime, setCalculateRestTime] = useState(0);
    const [calculated, setCalculated] = useState(false);

    const [calculatedWorkingTimeInMinutes, setCalculatedWorkingTimeInMinutes] = useState(0);
    const [assignedSumMinutes, setAssignedSumMinutes] = useState(0);
    const [restToAssignMinutes, setrestToAssignMinutes] = useState(0);

    const [calculatedWorkingTimeformatted, setCalculatedWorkingTimeformatted] = useState('');
    const [assignedSumformatted, setAssignedSumformatted] = useState('');
    const [restToAssignformatted, setRestToAssignformatted] = useState('');

    const [assignedBarWidth, setAssignedBarWidth] = useState(0);
    const [progressBarColor, setProgressBarColor] = useState('#99cc33');

    const [userId, setUserId] = useState(0);


    const getUser = async () => {
        const response = await axios.get("/api/user");

        if (response.status == 200) {
            const currentUser = await response.data;
            setUserId(currentUser.id);
        }
    };

    useEffect(() => {
        getUser();
    }, [])



    const loadCalculatedWorkingTime = async () => {

        const response = await fetch('/api/calculatedAttendances/' + userId + '/date/' + selectedDate)
        const data = await response.json();

        //conversion to minutes
        const timeString = data.calculatedAttendance[0].net_working_time
        const timeToMinutes = convertNetWorkingTimeToMinutes(timeString);
        setCalculatedWorkingTimeInMinutes(timeToMinutes);
        //conversion to output format
        setCalculatedWorkingTimeformatted(convertMinutesToTimeHHmm(timeToMinutes));

        //toggle for calculation of Rest Time
        if (calculateRestTime == 0) {
            setCalculateRestTime(1);
        } else {
            setCalculateRestTime(0);
        };

    }
    // will be updated when day change ... in future if entry value changes, then event also must be triggered
    useEffect(() => {
        if (userId != 0) {
            loadCalculatedWorkingTime();
        }
    }, [userId, selectedDate])




    const calculateDayEntriesMinutes = () => {
        let sumMinutes = 0;
        dayEntries.map((elem) => {
            const elemMinutes = convertNetWorkingTimeToMinutes(elem.working_time_assigned);
            sumMinutes += elemMinutes;
        });
        setAssignedSumMinutes(sumMinutes);
        setAssignedSumformatted(convertMinutesToTimeHHmm(sumMinutes));
        //toggle for calculation of Rest Time
        if (calculateRestTime == 0) {
            setCalculateRestTime(1);
        } else {
            setCalculateRestTime(0);
        };
    }
    useEffect(() => {
        calculateDayEntriesMinutes();
    }, [dayEntries])


    const calculateRestToAssignMinutes = () => {
        setCalculated(false);
        const delta = calculatedWorkingTimeInMinutes - assignedSumMinutes;
        setrestToAssignMinutes(delta);
        setRestToAssignformatted(convertMinutesToTimeHHmm(delta));

        displayBar();

        setCalculated(true);
    }
    useEffect(() => {
        calculateRestToAssignMinutes();
    }, [calculateRestTime])


    const displayBar = () => {

        const value = Math.floor((assignedSumMinutes / calculatedWorkingTimeInMinutes) * 200);

        if (value <= 0) {
            setAssignedBarWidth(0);
        } else if (value > 200) {
            setAssignedBarWidth(196);
            setProgressBarColor('#FF0000');

        } else {
            setAssignedBarWidth(value - 4);
            setProgressBarColor('#99cc33');
        }


    }




    return (
        <div className="working-time">
            <div className="working-time__total-first-row">
                <div className="working-time__total-first-row__tag">Total Working Time</div>
                <div className="working-time__total-first-row__time">{calculatedWorkingTimeformatted}</div>
            </div>

            <div className="working-time__group">
                <div className="working-time__group__tag">assigned</div>
                <div className="working-time__group__assigned-sum">{assignedSumformatted}</div>
                <div className="working-time__group__bar">
                    <div className="working-time__group__bar__progress"
                        style={{
                            '--assignedWidthstyle': assignedBarWidth + 'px',
                            '--barColorStyle': progressBarColor
                        }}>
                    </div>
                </div>
                {
                    calculated &&
                    <>
                        <div className="working-time__group__rest-time" >{restToAssignformatted}</div>
                        <div className="working-time__group__tag">to assign</div>
                    </>
                }
            </div>

        </div >

    )
}