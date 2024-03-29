import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Config from "./components/Config/Config";
// import resumeData from "./resumeData";
import firebaseService from "./services/FirebaseService";
class App extends Component {
  state = { data: [], config: false };

  componentDidMount() {
    firebaseService.getData("resumeData", dataReceived =>
      this.setState({ data: dataReceived })
    );

    let splitUrl = window.location.href.split("config");
    splitUrl.length > 1
      ? (this.state.config = true)
      : (this.state.config = false);
    // salvando o objeto resumeData no firebase
    //  firebaseService.pushData('resumeData', resumeData);
  }

  render() {
    return (
      <div className="App">
        {this.state.config ? (
          <Config resumeData={this.state.data} />
        ) : (
          <div>
            <Header resumeData={this.state.data} />
            <About resumeData={this.state.data} />
            <Resume resumeData={this.state.data} />
            <Portfolio resumeData={this.state.data} />
            <Testimonials resumeData={this.state.data} />
            <ContactUs resumeData={this.state.data} />
            <Footer resumeData={this.state.data} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
