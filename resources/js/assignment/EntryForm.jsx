import { useState } from "react"

export default function EntryForm() {

    const [projectNumber, setProjectNumber] = useState('');
    const [rfqNumber, setRfqNumber] = useState('');
    const [typeCode, setTypeCode] = useState('');
    const [assignedMinutes, setAssignedMinutes] = useState(0);
    const [assignedTime, setAssignedTime] = useState('');
    const [comment, setComment] = useState('');


    const handleChange = () => {


    }



    return (
        <div className="entry-form">


            <div className="entry-form__form">

                <form action="/assignement" method="POST">

                    <button type="submit">Add Entry</button><br />

                    <label htmlFor="project-number">Project Number</label>
                    <input id="project-number" type="text" name="project-number" value={projectNumber} onChange={handleChange} />
                    <br />

                    <label htmlFor="rfq-number">RfQ Number</label>
                    <input id="rfq-number" type="text" name="rfq-number" value={rfqNumber} onChange={handleChange} />
                    <br />

                    <label htmlFor="type-code">Type Code</label>
                    <input id="type-code" type="text" name="type-code" value={typeCode} onChange={handleChange} />
                    <br />

                    <label htmlFor="assigned-time">Assigned Time</label>
                    <input id="assigned-time" type="text" name="assigned-time" value={assignedTime} onChange={handleChange} />
                    <br />

                    <label htmlFor="comment">Comment</label>
                    <input id="comment" type="text" name="comment" value={comment} onChange={handleChange} />
                    <br />

                </form>

            </div>
        </div>


    )
}