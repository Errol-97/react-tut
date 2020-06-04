import React from 'react';


const person = (props) => {

    return (
        <div>
            <p onClick={props.click}>Name: {props.name}, Age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
        
    )
};

export default person;