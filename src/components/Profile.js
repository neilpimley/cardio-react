import React, { Component } from 'react';
import profile from '../images/profile2.jpg';
import linkedin from '../images/linkedin.png';

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

                <div className="col-xs-12 col-md-3">
                    <img src={profile} className="img-fluid img-thumbnail float-left" alt="Dr. Peter McKavanagh" />
                </div>
                <div className="col-xs-12 col-md-9 d-xs-none">
                    <h1 className="profile-name">Dr Peter McKavanagh</h1>
                    <h5>MB BCh BAO, MRCP(UK), MRCP(Ire), MMedSc, PhD</h5>
                    <p>A dedicated consultant Cardiologist working at the Ulster and Royal Victoria Hospitals in Belfast. Areas
                        of expertise include:</p>
                    <ul className="expert-list">
                        <li>General and acute cardiology</li>
                        <li>Coronary artery disease</li>
                        <li>Interventional cardiology (angioplasty/stenting)</li>
                        <li>Cardiac CT, heart failure, cholesterol management</li>
                    </ul>
                    <p className="ml-2">
                        <a href="https://www.linkedin.com/in/peter-mckavanagh-25a853ab/" title="Click to view my LinkedIn profile">
                            <img src={linkedin} alt="Click to view my LinkedIn profile" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </section>
        <section className="bg-secondary">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto text-white">
                    <h2>Professional Profile</h2>
                    <p>All three of his degrees were from Queen's University Belfast. His primary Medical Degree with distinction
                        was in 2003; his Master in Medical Education with distinction was in 2010; and his PhD in Cardiac
                        CT was in 2016. He has a keen interest in research having published numerous papers and given international
                        presentations. He was also runner up in the European Society of Cardiology Young Investigator Award
                        in 2013. </p>

                    <p>His general cardiology training was in Belfast and he completed the membership examinations for the Royal
                        College of Physicians for both the UK and Ireland. Peter then had a two-year fellowship at a large
                        cardiology centre in Toronto and completed a diploma in Interventional Cardiology from the Royal
                        College of Canadian Cardiologists during this time. He also has an interest in third world cardiology,
                        having spent 6 months volunteering in Kenya in a large cardiology centre in Nairobi, as well being
                        involved with the Save a Heart Cardiac Surgery Nigerian Mission.</p>

                    <p>Peter has regular cardiology clinics and is happy to see all adult cardiology complaints.</p>

                    <p>Peter has always had a keen interest in sport, and continues to train regularly. He was captain of the
                        Queen’s University Belfast Judo Club during this undergraduate degree and was part of the team that
                        won five consecutive Irish University titles. He also represented Northern Ireland at junior and
                        senior levels. He has also volunteered with the Belfast Trust homeless service and with vulnerable
                        adults.</p>
                </div>
            </div>
        </div>
        </section>
        </div>
      )
    }
}
