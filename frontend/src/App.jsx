import React, { Component } from 'react';
import { Element } from 'react-scroll';
import ReactGA from 'react-ga4';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import PatientInformation from './components/PatientInformation';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {

  sendPageview = () => {
    const page = window.location.pathname + window.location.search + window.location.hash;
    ReactGA.send({ hitType: 'pageview', page });
  };

  componentDidMount() {
    ReactGA.initialize('G-FTDJ83BE0Q');           // <-- your GA4 measurement ID
    this.sendPageview();                        // initial load
    window.addEventListener('hashchange', this.sendPageview);   // SPA hash/nav changes
    window.addEventListener('popstate', this.sendPageview);     // back/forward
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.sendPageview);
    window.removeEventListener('popstate', this.sendPageview);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Element name="profile">
          <Profile />
        </Element >
        <Element name="patient-information">
          <PatientInformation />
        </Element >
        <Element name="contact">
          <Contact />
        </Element >
        <Footer />
      </div>
    );
  }
}

export default App;
