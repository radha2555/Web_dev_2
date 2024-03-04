import React  from 'react';
import { useState } from 'react';
// Function Component
export default function About(props) {
    
    const [Counter, setCounter] = useState(0);
    
    const Positive=()=>{
        setCounter(Counter+1)
    };
    const negative=()=>{    
        if (Counter >= 1) {
            setCounter(Counter-1)
    }    
    };
    return<> 
    <h1>About Page</h1>
        {<button onClick={negative}>-</button>}
        &nbsp;&nbsp; {Counter} &nbsp;&nbsp;
        {<button onClick={Positive}>+</button>}
    </>;
};