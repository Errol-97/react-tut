import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { render } from 'react-dom';


class App extends Component{

  state = {
    persons: [
      { name: 'Errol', age: 23 },
      { name: 'Robert', age: 21 },
      { name: 'Ross', age: 17 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
      // dont do this: this.state.pesrons[0].name = 'Errollliee';
      this.setState({
        persons: [
          {name: 'Errol', age: 24},
          {name: newName, age: 21},
          {name: 'Ross', age: 17}

        ]
        
      });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Errol', age: 23},
        {name: event.target.value, age: 21},
        {name: 'Ross', age: 17}

      ]
    });
  }

  togglePersonHandler = () => {
    // const doesShow = this.state.showPersons;
    this.setState({showPersons: !this.state.showPersons});
  }
  render(){
    const appStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                changed={this.nameChangedHandler}/>
              <Person 
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click = {this.switchNameHandler.bind(this, 'Robbo')}
              changed={this.nameChangedHandler}> I am still in college</Person>
              <Person 
              name={this.state.persons[2].name} 
              age= {this.state.persons[2].age}
              changed={this.nameChangedHandler}>I am still in high school</Person>
            </div>
      );
    }
    return (
        <div className="App">
          <h1>Hi, I'm a React App!</h1>
          <p>This is really working</p>
          <button 
            style = {appStyle}
            onClick={() => this.togglePersonHandler()  }>Switch Namer</button> 
          {persons}
        </div> 

          
      );
    // return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'Hi, Im React App'));

  } 
}

export default App;



