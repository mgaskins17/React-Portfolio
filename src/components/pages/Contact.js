import React from 'react';


export default function Contact() {
    return (
        <section>
            <form className="border border-dark w-75 mx-auto mt-3">
                <h2 className="">Send me a message!</h2>
                <div className="d-flex flex-column">
                    <label for="name">Name:</label>
                    <input type="text"></input>
                </div>
                <div className="d-flex flex-column">
                    <label for="email">Email:</label>
                    <input type="email"></input>
                </div>
                <div className="d-flex flex-column">
                    <label for="message">Message:</label>
                    <input type="text"></input>
                </div>
                <button>Submit</button>
            </form>
        </section>
    )
}