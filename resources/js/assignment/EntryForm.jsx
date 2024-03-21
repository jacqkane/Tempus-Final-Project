
import { useContext, useState } from "react"
import axios from 'axios';
import Context from "../Context";

export default function EntryForm({ selectedDate }) {

    const { state: { user, role, currentDate, currentDateFormated }, dispatch, getUser } = useContext(Context);

    const [entryValues, setEntryValues] = useState({
        project_id: '',
        rfq_id: '',
        cost_group_id: '',
        working_time_assigned: '',
        comment: '',
        date: '',
    });


    const handleChange = (e) => {

        console.log(e.target.assignedTime);

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



    return (
        <div className="entry-form">


            <div className="entry-form__form">

                <form action="" method="POST" onSubmit={handleSubmit}>

                    <button type="submit">Add Entry</button><br />

                    <label htmlFor="project_id">project_id</label>
                    <input id="project_id" type="number" name="project_id" value={entryValues.project_id} onChange={handleChange} />
                    <br />

                    <label htmlFor="rfq_id">rfq_id</label>
                    <input id="rfq_id" type="number" name="rfq_id" value={entryValues.rfq_id} onChange={handleChange} />
                    <br />

                    <label htmlFor="cost_group_id">cost_group_id</label>
                    <input id="cost_group_id" type="number" name="cost_group_id" value={entryValues.cost_group_id} onChange={handleChange} />
                    <br />

                    <label htmlFor="working_time_assigned">working_time_assigned</label>
                    <input id="working_time_assigned" type="time" name="working_time_assigned" placeholder="hh:mm" value={entryValues.working_time_assigned} onChange={handleChange} />
                    <br />

                    <label htmlFor="comment">Comment</label>
                    <input id="comment" type="text" name="comment" placeholder="write comment" value={entryValues.comment} onChange={handleChange} />
                    <br />

                </form>

            </div>
        </div>


    )
}