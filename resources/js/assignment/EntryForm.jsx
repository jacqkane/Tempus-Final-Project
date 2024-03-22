
import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import Context from "../Context";
import '/resources/scss/assignment/EntryForm.scss'

export default function EntryForm({ selectedDate }) {

    const { state: { user, role, currentDate, currentDateFormated }, dispatch, getUser } = useContext(Context);
    const [allProjectNumbers, setAllProjectNumbers] = useState([]);
    const [allRfqNumbers, setAllRfqNumbers] = useState([]);
    const [allCostGroupCodes, setAllCostGroupCodes] = useState([]);

    const [entryValues, setEntryValues] = useState({
        project_id: '',
        project_number: '',
        rfq_id: '',
        rfq_number: '',
        cost_group_id: '',
        cost_group_code: '',
        working_time_assigned: '',
        comment: '',
        date: '',
    });

    console.log(entryValues);

    const handleChange = (e) => {
        setEntryValues(previous_values => {
            return ({
                ...previous_values,
                date: selectedDate,
                [e.target.name]: e.target.value
                //it takes all input fields once they change, no need to define it by name!
            });
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //sets also the user_id
        try {
            const response = await axios.post('http://www.tempus.test/api/assignment/new-entry', entryValues);
            const response_data = await response.data;

        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }
    }

    const getAllProjectNumbers = async () => {
        try {
            const response = await axios.get('http://www.tempus.test/api/assignment/allProjectNumbers');
            const response_data = await response.data;
            let tempArray = [];
            response_data.map((elem, i) => {
                tempArray.push(elem.project_number);
            })
            setAllProjectNumbers(tempArray);
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }
    }

    const getAllRfqNumbers = async () => {
        try {
            const response = await axios.get('http://www.tempus.test/api/assignment/allRfqNumbers');
            const response_data = await response.data;
            let tempArray = [];
            response_data.map((elem, i) => {
                tempArray.push(elem.rfq_number);
            })
            setAllRfqNumbers(tempArray);
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }
    }

    const getAllCostGroups = async () => {
        try {
            const response = await axios.get('http://www.tempus.test/api/assignment/allCostGroups');
            const response_data = await response.data;
            let tempArray = [];
            response_data.map((elem, i) => {
                tempArray.push(elem.cost_group_code);
            })
            setAllCostGroupCodes(tempArray);
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }
    }

    useEffect(() => {
        getAllProjectNumbers();
        getAllRfqNumbers();
        getAllCostGroups();
    }, [])


    return (
        <div className="entry-form">

            <form className="entry-form__form" action="" method="POST" onSubmit={handleSubmit}>

                <button className="entry-form__form__button" type="submit">Add Entry</button><br />

                <div className="entry-form__first-row">
                    <div>
                        <label htmlFor="project_number">Project Number</label>
                        <select name="project_number" id="project_number" onChange={handleChange}>
                            {
                                allProjectNumbers.map((project) => {
                                    return <option key={project} value={project}>{project}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="rfq_number">RfQ Number</label>
                        <select name="rfq_number" id="rfq_number" onChange={handleChange}>
                            {
                                allRfqNumbers.map((rfq_number) => {
                                    return <option key={rfq_number} value={rfq_number}>{rfq_number}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cost_group_code">Type Code</label>
                        <select name="cost_group_code" id="cost_group_code" onChange={handleChange}>
                            {
                                allCostGroupCodes.map((code) => {
                                    return <option key={code} value={code}>{code}</option>
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="entry-form__second-row">
                    <div>
                        <label htmlFor="working_time_assigned">working_time_assigned</label>
                        <input id="working_time_assigned" type="text" name="working_time_assigned" placeholder="hh:mm" value={entryValues.working_time_assigned} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="comment">Comment</label>
                        <input id="comment" type="text" name="comment" placeholder="write comment" value={entryValues.comment} onChange={handleChange} />
                    </div>
                </div>

            </form>


        </div>


    )
}