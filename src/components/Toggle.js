//how to know when to use state:
//is it dynamic (changes) = state if static(doesn't change) != state
//is it passed as a prop != state
//can you compute it based on any other state or props in component  != state
//die sit remain unchanged over time  != state

import React, { useState } from "react";



function Toggle() {
  //setting initial state here as false because the button should be "OFF" when the component first renders
  const [isOn, setIsOn] = useState(false);

  //handleClick callback function
  //call the setter function to update our state variable
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? 'red' : 'white';

  //conditional rendering to dynamically determine the buttons text based on our state variable
  return (<button style={{ background: color }} onClick={handleClick}>
    {isOn ? 'ON' : 'OFF'}
  </button>
  );
}


export default Toggle;
