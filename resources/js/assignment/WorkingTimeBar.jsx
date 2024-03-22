import { useEffect, useState } from "react";
import { convertMinutesToTimeHHmm } from '/resources/js/common/dateTimeConversion.js'
import '/resources/scss/assignment/WorkingTimeBar.scss'


export default function WorkingTimeBar({ calculatedWorkingTimeInMinutes }) {

    const [formattedTime, setFormattedTime] = useState('');

    function convertMinutesToTime() {
        setFormattedTime(convertMinutesToTimeHHmm(calculatedWorkingTimeInMinutes));
    }

    useEffect(() => {
        convertMinutesToTime();
    }, [calculatedWorkingTimeInMinutes]);

    return (
        <div className="working-time-bar">
            <div>{'Working Day Total ' + formattedTime}</div>
        </div>

    )
}