import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { render } from 'react-dom';


class App extends Component{

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
      // dont do this: this.state.pesrons[0].name = 'Errollliee';
      this.setState({
        persons: [
          {name: 'Errol', age: 28},
          {name: newName, age: 21},
          {name: 'Ross', age: 17}

        ]
        
      });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Errol', age: 28},
        {name: event.target.value, age: 21},
        {name: 'Ross', age: 17}

      ]
    });
  }
  render(){
    return (
        <div className="App">
          <h1>Hi, I'm a React App!</h1>
          <p>This is really working</p>
          <button onClick={() => this.switchNameHandler('Robert!!')  }>Switch Namer</button> 
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
    // return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'Hi, Im React App'));

  } 
}

export default App;



