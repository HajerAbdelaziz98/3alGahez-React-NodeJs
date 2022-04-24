import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
    var templateParams = {
        name: 'Marina',
    };

    const sendEmail = () => {
        emailjs.send('service_c9ea6c7', 'template_tllvfto', templateParams, 'RkxGm88iQuXYVTJsP')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

    };


    return (
        // <form ref={form} onSubmit={sendEmail}>
        //     <label>Name</label>
        //     <input type="text" name="user_name" value="Marina" />
        //     <label>Email</label>
        //     <input type="email" name="user_email" value="marina@gmail.com" />
        //     <label>Message</label>
        //     <textarea name="message" value="Successful payment" />
        //     <input type="submit" value="Send" />
        // </form>
        <button onClick={sendEmail}> Click</button>
    );
};
var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};

