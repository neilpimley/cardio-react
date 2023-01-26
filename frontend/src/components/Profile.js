import React, { Component } from 'react';
import profileScrubs from '../images/profile-scrubs.jpg';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <section className="bg-light">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 d-none d-xs-block">
                                <h3 className="profile-name">Dr Peter McKavanagh</h3>
                                <p>MB BCh BAO, MRCP(UK), MRCP(Ire), MMedSc, PhD</p>
                            </div>

                            <div className="col-xs-12 col-md-5">
                                <img src={profileScrubs} className="img-fluid img-thumbnail float-left" alt="Dr. Peter McKavanagh" />
                            </div>
                            <div className="col-xs-12 col-md-7 d-xs-none">
                                <h1 className="profile-name">Dr Peter McKavanagh</h1>
                                <h5>MB BCh BAO, MRCP(UK), MRCP(Ire), MMedSc, PhD</h5>
                                <p>A dedicated consultant Cardiologist working at the Ulster and Royal Victoria Hospitals in Belfast, Northern Ireland. Areas
                                    of expertise include:</p>
                                <ul className="expert-list">
                                    <li>General and acute cardiology</li>
                                    <li>Coronary artery disease</li>
                                    <li>Interventional cardiology (angioplasty/stenting)</li>
                                    <li>Cardiac CT, heart failure, cholesterol & hypertension management</li>
                                </ul>
                                <p className="ml-2">
                                    Our cardiology clinic offers top quality care in a comfortable environment, with very competitive prices.
                                    Our mission is to investigate and treat our patients quickly so that they can achieve long-term
                                    cardiovascular health.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light-blue">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <h2>Professional Profile</h2>
                                <p>All three of Dr McKavanagh’s degrees were from Queen's University Belfast. His primary medical degree with distinction was in 2003; his MSc in Clinical Education with distinction was in 2010; and his PhD in Cardiac CT was in 2016. He has a keen interest in research having published numerous papers and given international presentations. He was also runner-up in the European Society of Cardiology Young Investigator Award in 2013.  </p>

                                <p>His general cardiology training was in Belfast and he completed the membership examinations for the Royal College of Physicians for both the UK and Ireland. Peter then had a two-year fellowship at a large cardiology centre in Toronto receiving recognition for this from the University of Toronto.  </p>

                                <p>He also has an interest in third world cardiology, having spent 6 months volunteering in Kenya in a large cardiology centre in Nairobi, as well as being involved with the Save a Heart Cardiac Surgery Nigerian Mission. He also represented Northern Ireland at junior and senior levels. He has also volunteered with vulnerable adults and offered cardiology support for the Belfast Trust homeless service. </p>

                                <p>Peter has always had a keen interest in sport, and continues to train regularly. He was captain of the Queen’s University Belfast Judo Club during this undergraduate degree and was part of the team that won five consecutive Irish University titles.  </p>

                                <p>Peter returned to Northern Ireland in 2017 and has been working between the Ulster and Royal Victoria Hospitals since. He has regular cardiology clinics and is happy to see all adult cardiac disease complaints. </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
