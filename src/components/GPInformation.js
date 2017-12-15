import React, { Component } from 'react';

export default class GPInformation extends Component {
    render() {
      return (
        <section class="bg-info">
          <div class="container">
              <div class="row">
                  <div class="col-lg-10 mx-auto text-white">
                      <h2>GP Information</h2>
                      <p>We have set up to provide a prompt service for private patients in Northern Ireland. By working together
                          and we can offer the complete range of diagnostics and treatments for your private patients.</p>
                      <p>We are very happy to discuss patients.</p>

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
                                  <input type="email" class="form-control" id="name" placeholder="Enter your email address" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label for="inputPassword" class="col-sm-3 col-form-label">GP Practice</label>
                              <div class="col-sm-9">
                                  <input type="email" class="form-control" id="practiceName" placeholder="Enter your GP Practice Name" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label for="inputPassword" class="col-sm-3 col-form-label">Patient Name</label>
                              <div class="col-sm-9">
                                  <input type="text" class="form-control" id="patientName" placeholder="Enter your patient's name" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label for="inputPassword" class="col-sm-3 col-form-label">Patient phone numer</label>
                              <div class="col-sm-9">
                                  <input type="tel" class="form-control" id="patientPhone" placeholder="Enter your patient's phone number" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label for="inputPassword" class="col-sm-3 col-form-label">Patient email address</label>
                              <div class="col-sm-9">
                                  <input type="email" class="form-control" id="patientEmail" placeholder="Enter your patient's email address" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <div class="col-sm-12">
                                  <label for="comments">Comments</label>
                                  <textarea class="form-control" id="comments" rows="3"></textarea>
                              </div>
                          </div>
                          <div class="form-group row">
                              <div class="col-sm-12">
                                  <button class="btn btn-lg float-right">Send</button>
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
