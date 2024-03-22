import { useState } from "react";
import "/resources/scss/homepage/Contact.scss";
import axios from "axios";

export default function Contact () {

    const [formData, setFormData] = useState ({
        company: '',
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/contact', formData) 
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Something is wrong', error);
            })
    }

    return (
        <>
        <hr />
        <section className="contact" id="contact">
        <h2>Contact us!</h2>
        <p>Have questions or want to learn more? Contact us today for a personalized demo and discover how our app can transform your workplace!</p>
        <form onSubmit={handleSubmit}>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name and surname" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address"/>
            <textarea name="message" cols="30" rows="10" value={formData.message} onChange={handleChange} placeholder="You can describe what you interest in" />
            <button type="submit">Send it</button>
        </form>


        </section>
        </>
    )
}