import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'whatwg-fetch';

export default class GPInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gpName: '',
            gpPhone: '',
            gpEmail: '',
            practiceName: '',
            patientName: '',
            patientPhone: '',
            patientEmail: '',
            gpMessage: '',
            loading: false,
            messageSent: false,
            errorMessage: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetMessage = this.resetMessage.bind(this);
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
        var _this = this;
        event.preventDefault();
        this.setState({ 
            loading: true, 
            messageSent: false, 
            errorMessage: '' 
        });
        fetch('/gpContact', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
	        method: 'POST',
	        body: JSON.stringify(this.state)
        }).then(function() { 
            _this.setState({
                loading: false, 
                messageSent: true,
            });
         }).catch(function(error) {
            _this.setState({
                loading: false, 
                errorMessage: error 
            });
        });
    }

    resetMessage() {
        this.setState({
            patientName: '',
            patientPhone: '',
            patientEmail: '',
            patientMessage: '',
            loading: false,
            messageSent: false,
            errorMessage: ''
        });
    }

    render() {
      return (
        <section className="bg-info">
          <div className="container">
              <div className="row">
                  <div className="col-lg-10 mx-auto text-white">
                      <h2>GP Information</h2>
                      <p>We have set up to provide a prompt service for private patients in Northern Ireland. By working together
                          and we can offer the complete range of diagnostics and treatments for your private patients.</p>
                      <p>We are very happy to discuss patients.</p>

                    {!this.state.messageSent && 
                      <form onSubmit={this.handleSubmit}>
                          <h5>GP Details</h5>
                          <div className="form-group row">
                              <label htmlFor="gpNAme" className="col-md-2 col-form-label">Full Name</label>
                              <div className="col-md-4">
                                  <input type="text" className="form-control" name="gpName" 
                                        disabled={this.state.loading} required
                                        placeholder="Enter your name" onChange={this.handleInputChange} />
                              </div>
                              <label htmlFor="practiceName" className="col-md-2 col-form-label">GP Practice</label>
                              <div className="col-md-4">
                                  <input type="text" className="form-control" name="practiceName"
                                        disabled={this.state.loading} required
                                        placeholder="Enter your GP Practice Name" onChange={this.handleInputChange}/>
                              </div>
                          </div>
                          <div className="form-group row">
                              <label htmlFor="gpPhone" className="col-md-2 col-form-label">Phone number</label>
                              <div className="col-md-4">
                                  <input type="tel" className="form-control" name="gpPhone" 
                                        disabled={this.state.loading} required
                                        placeholder="Enter your phone number" onChange={this.handleInputChange} />
                              </div>
                              <label htmlFor="gpEmail" className="col-md-2 col-form-label">Email address</label>
                              <div className="col-md-4">
                                  <input type="email" className="form-control" name="gpEmail" 
                                        disabled={this.state.loading} required
                                        placeholder="Enter your email address" onChange={this.handleInputChange}/>
                              </div>
                          </div>
                          <h5>Patient Details</h5>
                          <div className="form-group row">
                              <label htmlFor="patientName" className="col-md-2 col-form-label">Name</label>
                              <div className="col-md-4">
                                  <input type="text" className="form-control" name="patientName" 
                                        disabled={this.state.loading} required
                                        placeholder="Enter your patient's name" onChange={this.handleInputChange} />
                              </div>
                              <label htmlFor="patientPhone" className="col-md-2 col-form-label">Phone numer</label>
                              <div className="col-md-4">
                                  <input type="tel" className="form-control" name="patientPhone" 
                                        disabled={this.state.loading} required
                                        placeholder="Enter your patient's phone number" onChange={this.handleInputChange} />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label htmlFor="patientEmail" className="col-md-2 col-form-label">Email address</label>
                              <div className="col-md-6">
                                  <input type="email" className="form-control" name="patientEmail" 
                                        disabled={this.state.loading} required
                                        placeholder="Enter your patient's email address" onChange={this.handleInputChange} />
                              </div>
                          </div>
                          <div className="form-group row">
                              <div className="col-md-12">
                                  <label htmlFor="gpMessage">Comments</label>
                                  <textarea className="form-control" name="gpMessage" rows="3"></textarea>
                              </div>
                          </div>
                          <div className="form-group row">
                              <div className="col-md-12">
                                  <button className="btn btn-lg float-right">{this.state.loading && 
                                    <FontAwesome name='circle-o-notch' spin />
                                }
                                &nbsp; Send</button>
                              </div>
                          </div>

                      </form>
                    }
                    {this.state.messageSent && 
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
