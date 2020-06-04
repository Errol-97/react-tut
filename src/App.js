import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import { render } from 'react-dom';


const App = props => {

  const [ personsState, setPersonState ] = useState({

    persons: [
      {name: 'Errol', age: 28},
      {name: 'rob', age: 21},
      {name: 'ross', age: 17}
    ]
    // otherState: 'someOther value'

  });

  const [otherState, setOtherState ] = useState({
    otherState: 'someOther value'
  });

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked');
      // dont do this: this.state.pesrons[0].name = 'Errollliee';
      setPersonState({
        persons: [
          {name: 'Errol', age: 28},
          {name: newName, age: 21},
          {name: 'Ross', age: 17}

        ]
        
      });
  }

  const nameChangedHandler = (event) => {
    setPersonState( {
      persons: [
        {name: 'Errol', age: 28},
        {name: event.target.value, age: 21},
        {name: 'Ross', age: 17}

      ]
    });
  }
  
  return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working</p>
        <button onClick={() => switchNameHandler('Robert!!')  }>Switch Namer</button> 
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
          changed={nameChangedHandler}/>
        <Person 
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click = {switchNameHandler.bind(this, 'Robbo')}
        changed={nameChangedHandler}> I am still in college</Person>
        <Person 
        name={personsState.persons[2].name} 
        age= {personsState.persons[2].age}
        changed={nameChangedHandler}>I am still in high school</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'Hi, Im React App'));

    
}

export default App;



