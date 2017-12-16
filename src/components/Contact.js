import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientName: '',
            patientPhone: '',
            patientEmail: '',
            patientMessage: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
        alert('A name was submitted: ' + JSON.stringify(this.state));
        event.preventDefault();
    }


    render() {
      return (
    <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h2>Contact Information</h2>
                    <p>To make an appointment with Dr McKavanagh please get in touch via the contact details below based. We
                        are happy to see self-referrals but recommend having a GP referral before booking directly/self-referring
                        to ensure you see appropriate medical personal.</p>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Full Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="patientName" placeholder="Enter your name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Phone numer</label>
                            <div className="col-sm-9">
                                <input type="tel" className="form-control" name="patientPhone" placeholder="Enter your phone number" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Email address</label>
                            <div className="col-sm-9">
                                <input type="email" className="form-control" name="patientEmail" placeholder="Enter your email address" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" name="patientMessage" rows="3" value={this.state.message} onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-lg float-right">Send</button>
                            </div>
                        </div>
                    </form>

                    <h4>Request a call back</h4>

                    <address>
                        <strong>Dundonald Consulting Rooms</strong>
                        <br /> 1 St Johns Wood Park
                        <br /> Belfast
                        <br /> BT16 1RS
                    </address>
                    <p>
                        <strong>Phone:</strong>
                        <a href="tel:+2890484840">028 9048 4840</a>
                    </p>
                    <p>
                        <strong>Email:</strong>
                        <a href="mailto:info@dundonaldconsulting.com">info@dundonaldconsulting.com</a>
                    </p>

                </div>
            </div>

        </div>
    </section>
 )
}
}


