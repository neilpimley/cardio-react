import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

export default class PatientInformation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <h2>Patient information </h2>

                            <Nav tabs className="nav-fill">
                                <NavItem>
                                    <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}>
                                        <h4>Symptoms</h4>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }} >
                                        <h4>Investigations</h4>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => { this.toggle('3'); }} >
                                        <h4>Pricing</h4>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <p>Cardiovascular disease remains one of the most significant causes of death in Northern Ireland.
                                        In 2015, 27.4% of all deaths in the UK were caused by cardiovascular disease. Common cardiology
                                        symptoms include chest pain, palpitation, shortness of breath, dizziness, blackout and collapses.
                                        These are often seen with common cardiology conditions such as:</p>
                                    <ul>
                                        <li>Angina </li>
                                        <li>Aortic Stenosis and other valvular conditions </li>
                                        <li>Atrial Fibrillation (AF) and other cardiac arrhythmias </li>
                                        <li>Heart Failure</li>
                                        <li>High Blood Pressure</li>
                                        <li>High Cholesterol</li>
                                        <li>Heart Block</li>
                                        <li>Cardiomyopathy</li>
                                        <li>Vasovagal Syncope</li>
                                    </ul>

                                    <p>For information about any additional conditions not featured, please contact us and Dr McKavanagh
                                        will be happy to answer any questions. Patients can self-refer but if in doubt your own GP can help
                                        ensure you are dealt with appropriately.</p>
                                </TabPane>
                                <TabPane tabId="2">
                                    <p>To help with diagnosis, some cardiology tests may be necessary. These may include:</p>

                                    <ul>
                                        <li>Electrocardiogram (ECG) (an electrical tracing of the heart rhythm) </li>
                                        <li>Echocardiography (an ultrasound of the heart)</li>
                                        <li>24HR Blood Pressure Monitoring (a device to assess blood pressure over 24 hours)</li>
                                        <li>Exercise Stress Test (EST) (a treadmill test to assess your ECG and Blood Pressure when
                                            the heart is stressed)</li>
                                        <li>Coronary Angiography (an invasive dye test to assess coronary arteries for blockages)</li>
                                        <li>Ambulatory ECG (a monitoring device to assess the heart rhythm over a period of time)</li>
                                        <li>Stress Echocardiography (an ultrasound test to assess the heart when it is stressed)</li>
                                        <li>Cardiac magnetic resonance imaging (MRI) (a specialised scan of the heart that is useful
                                            for assessing the heart muscle)</li>
                                        <li>Cardiac computerised tomography (CT) (a specialised scan of the heart that is useful
                                            for assessing coronary arteries for calcium and narrowing)</li>
                                    </ul>

                                    <p>For many patients, no further treatment is required after the initial comprehensive assessment.
                                        However, some patients do require:</p>
                                    <ul>
                                        <li>Coronary Angioplasty/Percutaneous Coronary Intervention (PCI)/ Stenting</li>
                                        <li>Pacemaker</li>
                                        <li>Implantable Defibrillator </li>
                                        <li>Pressure Wire Testing</li>
                                        <li>Electrophysiology Studies</li>
                                        <li>Coronary Artery Bypass Grafting</li>
                                        <li>Valve surgery/intervention</li>
                                    </ul>
                                </TabPane>
                                <TabPane tabId="3">
                                    <h5>Insured Patients</h5>
                                    <p>Patients with private healthcare insurance should contact their medical insurance company
                                        prior to their appointment to receive a pre-authorisation code and confirm their entitlement
                                        to benefit. Although we will invoice your insurance company on your behalf, the ultimate
                                        responsibility for payment lies with you. Consequently, should your insurance company
                                        fail to cover the full amount any deficit is your responsibility. Dr McKavanagh has registration
                                        with numerous insurance companies. </p>


                                    <h5>Self-funding</h5>
                                    <p>If you do not have private medical insurance, you will be responsible for all costs incurred for
                                        consultations and investigations. Self-funding patients must settle all accounts on the day of
                                        consultation. After the initial meeting tests can be arranged on the NHS, although normal waiting
                                        times will apply.</p>

                                    <h5>Consultation fees</h5>
                                    <table className="table table-striped table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Initial consultation self-pay</td>
                                                <td> £205</td>
                                            </tr>
                                            <tr>
                                                <td>Follow up self-pay</td>
                                                <td>£170</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </TabPane>
                            </TabContent>



                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

