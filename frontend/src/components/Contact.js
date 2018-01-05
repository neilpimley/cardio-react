import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'whatwg-fetch';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientName: '',
            patientPhone: '',
            patientEmail: '',
            patientMessage: '',
            loading: false,
            patientMessageSent: false,
            errorMessage: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetMessage = this.resetMessage.bind(this);
    }

    resetMessage() {
        this.setState({
            patientName: '',
            patientPhone: '',
            patientEmail: '',
            patientMessage: '',
            loading: false,
            patientMessageSent: false,
            errorMessage: ''
        });
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
        event.preventDefault();
        var _this = this;
        this.setState({ 
            loading: true, 
            patientMessageSent: false, 
            errorMessage: '' 
        });


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        fetch('/patientContact', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
	        body: JSON.stringify(this.state)
        }).then(function() { 
            _this.setState({
                loading: false, 
                patientMessageSent: true,
            });
         }).catch(function(error) {
            _this.setState({
                loading: false, 
                errorMessage: error 
            });
        });
    }


    render() {
      return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h2>Contact Information</h2>
                    <p>To make an appointment with Dr McKavanagh please get in touch via the contact details below based. We
                        are happy to see self-referrals but recommend having a GP referral before booking directly/self-referring
                        to ensure you see appropriate medical personal.</p>
                        {!this.state.patientMessageSent && 
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Full Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="patientName"
                                    disabled={this.state.loading} required
                                    placeholder="Enter your name" onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Phone numer</label>
                            <div className="col-sm-9">
                                <input type="tel" className="form-control" name="patientPhone" 
                                    disabled={this.state.loading} required
                                    placeholder="Enter your phone number" onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Email address</label>
                            <div className="col-sm-9">
                                <input type="email" className="form-control" name="patientEmail" 
                                    disabled={this.state.loading} required
                                    placeholder="Enter your email address" onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" name="patientMessage" rows="3" 
                                disabled={this.state.loading} required
                                    onChange={this.handleInputChange}></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-lg float-right" 
                                disabled={this.state.loading}>
                                {this.state.loading && 
                                    <FontAwesome name='circle-o-notch' spin />
                                }
                                &nbsp; Send</button>
                            </div>
                        </div>
                    </form>
                    }
                    {this.state.patientMessageSent && 
                        <div class="alert alert-secondary" role="alert">
                            Your message has been sent <button type="button" className="btn btn-primary float-right" onClick={this.resetMessage}>Send another message</button>
                        </div>
                    }
                    

                </div>
            </div>
        </div>
    </section>
 )
}
}


