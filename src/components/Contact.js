import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
      return (
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h2>Contact Information</h2>
                    <p>To make an appointment with Dr McKavanagh please get in touch via the contact details below based. We
                        are happy to see self-referrals but recommend having a GP referral before booking directly/self-referring
                        to ensure you see appropriate medical personal.</p>

                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Full Name</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" name="patientName" placeholder="Enter your name" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Phone numer</label>
                            <div class="col-sm-9">
                                <input type="tel" class="form-control" name="patientPhone" placeholder="Enter your phone number" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Email address</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" name="patientEmail" placeholder="Enter your email address" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-12">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" name="patientMessage" rows="3" value={this.state.value} onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-12">
                                <button class="btn btn-lg float-right">Send</button>
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


