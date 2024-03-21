import "/resources/scss/homepage/Contact.scss";

export default function Contact () {
    return (
        <>
        <hr />
        <section className="contact">
        <h2>Get in touch</h2>
        <p>Have questions or want to learn more? Contact us today for a personalized demo and discover how our app can transform your workplace!</p>
        <form action="">
            <input type="text" placeholder="Company name" />
            <input type="text" placeholder="Name and surname" />
            <input type="email" placeholder="Email address"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="You can describe what you interest in"></textarea>
            <button type="submit">Send it</button>
        </form>


        </section>
        </>
    )
}