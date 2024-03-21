import { useEffect, useState } from "react";
import { convertMinutesToTimeHHmm } from '/resources/js/common/dateTimeConversion.js'


export default function WorkingTimeBar({ calculatedWorkingTimeInMinutes }) {

    const [formattedTime, setFormattedTime] = useState('');

    function convertMinutesToTime() {
        setFormattedTime(convertMinutesToTimeHHmm(calculatedWorkingTimeInMinutes));
    }

    useEffect(() => {
        convertMinutesToTime();
    }, [calculatedWorkingTimeInMinutes]);

    return (
        <div>
            {'Working Day Total ' + formattedTime}
        </div>

    )
}