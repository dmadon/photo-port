import React from 'react';

function ContactForm(){

return(
    <section>
        <h1>Contact Me</h1>
        <form id='contact-form'>

            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name'></input>
            </div>

            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email'></input>
            </div>
            
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea name='message' rows='5'></textarea>
            </div>

            <button type='submit'>Submit</button>

        </form>
    </section>
)

}

export default ContactForm;