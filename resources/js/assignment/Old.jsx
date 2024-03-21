// const [daysDropDownMenu, setDaysDropDownMenu] = useState([])
// const generateLast31days = () => {
//     let past31days = [];

//     for (let i = 0; i < 31; i++) {
//         const date = new Date(currentDate);
//         const dateFormated = formatDateToYYYYmmDD(date.setDate(date.getDate() - i));
//         past31days.push(dateFormated);
//     }
//     setDaysDropDownMenu(past31days);
// }
// useEffect(() => {
//     generateLast31days();
// }, [currentDate]);


// const incrementDateByOne = () => {
//     const currentDateConverted = new Date(currentDate);
//     const selectedDateConverted = new Date(selectedDate);
//     if (selectedDateConverted.getTime() < currentDateConverted.getTime()) {
//         const date = new Date(selectedDate);
//         const newDate = formatDateToYYYYmmDD(date.setDate(date.getDate() + 1));
//         setSelectedDate(newDate);
//     }
// }

// const decrementDateByOne = () => {
//     console.log(selectedDate);
//     const date = new Date(selectedDate);
//     const newDate = formatDateToYYYYmmDD(date.setDate(date.getDate() - 1));
//     setSelectedDate(newDate);
// }


{/* <button onClick={decrementDateByOne}>{'<<'}</button>
            <select id="assignment-date-menu" defaultValue={selectedDate} onChange={handleDateSelection}>
                {
                    daysDropDownMenu.map((day, i) => {
                        return <option key={i} value={day}>{day}</option>
                    })
                }

            </select>
            <button onClick={incrementDateByOne}>{'>>'}</button> */}


// function to format Date to yyyy-mm-dd
// export function formatDateToYYYYmmDD(value) {
//     const date = new Date(value);
//     const formatedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
//     return formatedDate;
// }