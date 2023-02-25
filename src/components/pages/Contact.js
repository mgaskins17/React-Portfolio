import React from 'react';


export default function Contact() {
    return (
        <section>
            <form className="contactForm border border-dark w-25 mx-auto mt-5 p-3 rounded">
                <h2 className="text-center">Send me a message!</h2>
                <div className="d-flex flex-column">
                    <label htmlFor="name">Name:</label>
                    <input type="text"></input>
                </div>
                <div className="d-flex flex-column">
                    <label for="email">Email:</label>
                    <input type="email"></input>
                </div>
                <div className="d-flex flex-column">
                    <label for="message">Message:</label>
                    <textarea id="contactMSG" type="text"></textarea>
                </div>
                <div>
                    <button className="mt-2 btn btn-primary">Submit</button>
                </div>
            </form>
        </section>
    )
}