import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import NavBar from './components/NavBar';
import Profile from './components/Profile';
import GPInformation from './components/GPInformation';
import PatientInformation from './components/PatientInformation';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Example from './components/Example';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ScrollableAnchor id={'profile'}>
          <Profile />
        </ScrollableAnchor>
        <ScrollableAnchor id={'gp-information'}>
          <GPInformation />
        </ScrollableAnchor>
        <ScrollableAnchor id={'patient-information'}>
          <PatientInformation />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
        <Example />
    </div>
    );
  }
}

export default App;
