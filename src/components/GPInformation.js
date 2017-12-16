import React, { Component } from 'react';

export default class GPInformation extends Component {
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

                      <form>
                          <div className="form-group row">
                              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Full Name</label>
                              <div className="col-sm-9">
                                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Phone numer</label>
                              <div className="col-sm-9">
                                  <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Email address</label>
                              <div className="col-sm-9">
                                  <input type="email" className="form-control" id="name" placeholder="Enter your email address" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">GP Practice</label>
                              <div className="col-sm-9">
                                  <input type="email" className="form-control" id="practiceName" placeholder="Enter your GP Practice Name" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Patient Name</label>
                              <div className="col-sm-9">
                                  <input type="text" className="form-control" id="patientName" placeholder="Enter your patient's name" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Patient phone numer</label>
                              <div className="col-sm-9">
                                  <input type="tel" className="form-control" id="patientPhone" placeholder="Enter your patient's phone number" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Patient email address</label>
                              <div className="col-sm-9">
                                  <input type="email" className="form-control" id="patientEmail" placeholder="Enter your patient's email address" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <div className="col-sm-12">
                                  <label htmlFor="comments">Comments</label>
                                  <textarea className="form-control" id="comments" rows="3"></textarea>
                              </div>
                          </div>
                          <div className="form-group row">
                              <div className="col-sm-12">
                                  <button className="btn btn-lg float-right">Send</button>
                              </div>
                          </div>

                      </form>

                  </div>
              </div>
          </div>
      </section>
      )
    }
}
