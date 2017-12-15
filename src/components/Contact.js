import React, { Component } from 'react';

export default class Contact extends Component {
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

                    <form>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Full Name</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Phone numer</label>
                            <div class="col-sm-9">
                                <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Email address</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" id="email" placeholder="Enter your email address" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-12">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="message" rows="3"></textarea>
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


