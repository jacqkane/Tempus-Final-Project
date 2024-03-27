import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import Context from "../Context";
import '/resources/scss/assignment/EntryForm.scss'

export default function EntryForm({ selectedDate, refreshList, setRefreshList, editFormId, setEditFormId }) {

    const { state: { user, role, currentDate, currentDateFormated }, dispatch, getUser } = useContext(Context);
    const [allProjectNumbers, setAllProjectNumbers] = useState([]);
    const [allRfqNumbers, setAllRfqNumbers] = useState([]);
    const [allCostGroupCodes, setAllCostGroupCodes] = useState([]);
    const [assignementData, setAssignementData] = useState([]);
    const [resetDone, setResetDone] = useState(false);

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
        id: 0,
    });

    const resetEntryValues = () => {
        setResetDone(false);
        setEntryValues(previous_values => {
            return ({
                ...previous_values,
                project_id: '',
                project_number: '',
                rfq_id: '',
                rfq_number: '',
                cost_group_id: '',
                cost_group_code: '',
                working_time_assigned: '',
                comment: '',
                date: '',
                id: 0,
            });
        });
        setResetDone(true);
    }

    // console.log(entryValues)
    // console.log(assignementData[0].project.project_number);

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

        try {
            const response = await axios.post('http://www.tempus.test/api/assignment/entry', entryValues);
            resetEntryValues()
            setEditFormId(0);
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

        if (refreshList == 0) {
            setRefreshList(1)
        } else {
            setRefreshList(0)
        }



    }

    const loadDataForEdit = async () => {

        try {
            const response = await axios.post('http://www.tempus.test/api/assignment/edit-query', {
                'entry_id': editFormId
            });
            const response_data = await response.data;
            setAssignementData(response_data);

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
        loadDataForEdit();
    }, [editFormId]);

    useEffect(() => {
        assignementData[0] &&
            setEntryValues(previous_values => {
                return ({
                    ...previous_values,
                    project_number: assignementData[0].project.project_number,
                    rfq_number: assignementData[0].rfq.rfq_number,
                    cost_group_code: assignementData[0].cost_group.cost_group_code,
                    working_time_assigned: assignementData[0].working_time_assigned,
                    comment: assignementData[0].comment,
                    id: editFormId,
                });
            });

    }, [assignementData])

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

                <div className="responsive">

                    <div className="entry-form__form__first-row">
                        <div className="entry-form__form__first-row__input-group">
                            <label htmlFor="project_number">Project Number</label>
                            <select name="project_number" id="project_number" value={entryValues.project_number} onChange={handleChange}>


                                <option value={0}>Select</option>

                                {
                                    allProjectNumbers.map((project) => {
                                        return <option key={project} value={project}>{project}</option>
                                    })
                                }


                            </select>
                        </div>
                        <div className="entry-form__form__first-row__input-group">
                            <label htmlFor="rfq_number">RfQ Number</label>
                            <select name="rfq_number" id="rfq_number" value={entryValues.rfq_number} onChange={handleChange}>
                                <option value={0} >Select</option>
                                {
                                    allRfqNumbers.map((rfq_number) => {
                                        return <option key={rfq_number} value={rfq_number}>{rfq_number}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="entry-form__form__first-row__input-group" >
                            <label htmlFor="cost_group_code">Type Code</label>
                            <select name="cost_group_code" id="cost_group_code" value={entryValues.cost_group_code} onChange={handleChange}>
                                <option value={0}>Select</option>
                                {
                                    allCostGroupCodes.map((code) => {
                                        return <option key={code} value={code}>{code}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="entry-form__form__second-row">
                        <div className="entry-form__form__second-row__input-group">
                            <label htmlFor="working_time_assigned">Working Time</label>
                            <input id="working_time_assigned" type="text" name="working_time_assigned" placeholder="hh:mm" value={entryValues.working_time_assigned} onChange={handleChange} />
                        </div>

                        <div className="entry-form__form__second-row__input-group">
                            <label htmlFor="comment">Comment</label>
                            <input id="comment" type="text" name="comment" placeholder="write comment" value={entryValues.comment} onChange={handleChange} />
                        </div>
                    </div>
                </div>

            </form>


        </div>


    )
}