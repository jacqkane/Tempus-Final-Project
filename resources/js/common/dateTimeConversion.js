
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

    const isNegative = minutes < 0;
    minutes = Math.abs(minutes); // Convert negative minutes to positive for calculation

    let hours = Math.floor(minutes / 60); // Get the whole number of hours
    let remainingMinutes = minutes % 60; // Get the remaining minutes

    if (isNegative) {
        hours = -hours; // Adjust hours for negative minutes
        remainingMinutes = -remainingMinutes; // Adjust remaining minutes for negative minutes
    }

    const formattedHours = String(hours).padStart(2, '0'); // Ensure two digits for hours
    const formattedMinutes = String(remainingMinutes).padStart(2, '0'); // Ensure two digits for minutes

    const formattedTime = `${formattedHours}:${formattedMinutes}`;

    return formattedTime;
}


export function formatDateToYYYYMMDDHHMMSS(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based index
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based index
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}



export function formatTimeHHMMSS(time) {

    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}


