import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import resumeData from './resumeData/resumeData';


class App extends Component {
  render(){
  return (
    <div className="App">
     <Header resumeData = {resumeData}/>
     <About/>
     <Resume/>
     <Portfolio/>
     <ContactMe/>
     <Footer/>

    </div>
  );
}
}

export default App;
