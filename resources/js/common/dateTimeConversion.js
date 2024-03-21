

// function to format Date to yyyy-mm-dd
// export function formatDateToYYYYmmDD(value) {
//     const date = new Date(value);
//     const formatedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
//     return formatedDate;
// }

// time strin conversion from hh:mm:ss to minutes
export function convertNetWorkingTimeToMinutes(timeString) {

    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    const timeStringToMinutes = Math.floor(hours * 60 + minutes + seconds / 60);
    return timeStringToMinutes;

}

export function convertMinutesToTimeHHmm(minutes) {

    const hours = Math.floor(minutes / 60); // Get the whole number of hours
    const remainingMinutes = minutes % 60; // Get the remaining minutes
    const formattedHours = String(hours).padStart(2, '0'); // Ensure two digits for hours
    const formattedMinutes = String(remainingMinutes).padStart(2, '0'); // Ensure two digits for minutes
    return `${formattedHours}:${formattedMinutes}`;


}


