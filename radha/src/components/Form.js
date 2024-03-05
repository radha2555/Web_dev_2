import React from "react";
import { useState } from "react";

function Form(){
    const [Inputs, setInputs] = useState({});

    const handelChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }

    const handelSubmit = (event)=>{
        event.preventDefault();
        console.log(Inputs);
    }
    return <>
        <h1>Form Page</h1>
        <form onSubmit={handelSubmit}>
            <label>Enter your name: </label>
            <input type="text" name="username" value={Inputs.username || "" } onChange={handelChange}/>
            <br/>
            <label>Enter your Branch: </label>
            <input type="text" name="branch" value={Inputs.branch || ""} onChange={handelChange}/>
            <br/>
            <input type="submit"/>
        </form>
    </>;
}

export default Form;