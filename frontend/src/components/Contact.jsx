import React, { Component } from 'react';

export default class Contact extends Component {
    handlePhoneClick = () => {
        window.gtag('event', 'conversion', {
          send_to: 'AW-769199339/tlWNCPyPpvMZEOuZ5O4C',
        });
    };

    render() {
      return (
    <section className="contact-section">
        <div className="container">
            <div className="row g-4 align-items-start">
                <div className="col-lg-7">
                    <h2>Contact Information</h2>
                    <p className="contact-intro">To make an appointment with Dr McKavanagh please phone <a href="tel:+442890484840" onClick={this.handlePhoneClick}>028 9048 4840</a> or use the appointment booking service below.</p>
                </div>
            </div>
        </div>
    </section>
 )
}
}


