
import { useState } from "react"
import axios from 'axios';

export default function EntryForm() {

    const [entryValues, setentryValues] = useState({
        projectNumber: '',
        rfqNumber: '',
        typeCode: '',
        assignedTime: '',
        comment: '',
    });


    const handleChange = (e) => {
        setentryValues(previous_values => {
            return ({
                ...previous_values,
                [e.target.name]: e.target.value
                //it takes all input fields once they change, no need to define it by name!
            });
        });
    }

    const handleSubmit = async () => {
        e.preventDefault();

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

                    <label htmlFor="project-number">Project Number</label>
                    <input id="project-number" type="text" name="projectNumber" value={entryValues.projectNumber} onChange={handleChange} />
                    <br />

                    <label htmlFor="rfq-number">RfQ Number</label>
                    <input id="rfq-number" type="text" name="rfqNumber" value={entryValues.rfqNumber} onChange={handleChange} />
                    <br />

                    <label htmlFor="type-code">Type Code</label>
                    <input id="type-code" type="text" name="typeCode" value={entryValues.typeCode} onChange={handleChange} />
                    <br />

                    <label htmlFor="assigned-time">Assigned Time</label>
                    <input id="assigned-time" type="text" name="assignedTime" placeholder="hh:mm" value={entryValues.assignedTime} onChange={handleChange} />
                    <br />

                    <label htmlFor="comment">Comment</label>
                    <input id="comment" type="text" name="comment" placeholder="write comment" value={entryValues.comment} onChange={handleChange} />
                    <br />

                </form>

            </div>
        </div>


    )
}