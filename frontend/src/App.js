import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import PatientInformation from './components/PatientInformation';
import Contact from './components/Contact';
import Footer from './components/Footer';

ReactGA.initialize('UA-133177479-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ScrollableAnchor id={'profile'}>
          <Profile />
        </ScrollableAnchor>
        <ScrollableAnchor id={'patient-information'}>
          <PatientInformation />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
    </div>
    );
  }
}

export default App;
