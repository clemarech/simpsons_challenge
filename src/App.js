import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp"
//import Work from "./Work";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      working: false
    }
  }
  workOrNot = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    let logoChange ="App-logo"
    if(this.state.working){
    logoChange = "App-logo-Change";
    }
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={logoChange} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.workOrNot}> Is he working ? </button>
         <Lamp on/>
         <Lamp />
        <Quote
          quote="I believe the children are the future...Unless we stop them now !"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
        quote="Me fail English? That's unpossible"
        character="Ralph Wiggum"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
      />
      <Quotes />
      </div>
    );
  }
}

export default App;
