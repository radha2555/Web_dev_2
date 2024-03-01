import React from 'react';
import { useNavigate } from 'react-router-dom';

//class component
class Home extends React.Component{
    constructor() {
        super();
        this.state = {technology :"MERN"};
    }
    handelNavigation = () =>{
        this.props.navigate('/contact');
    }
    render(){
        return<>
            <h1>Home Page </h1>
            <button type="button" onClick={this.handelNavigation}>
                Contact Us
            </button>
            <p>I am Learning {this.state.technology}.</p>
        </>;
    }
}
const HomeFunction = ()=> {
    const navigator = useNavigate();

    return <Home navigate={navigator}/>;
}

export default HomeFunction;