import React  from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Form from './components/Form';

function App() {
  return (
  <>
  <Layout/>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Layout/>}> */}
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='blog' element={<Blog title={"MERN technology"} author={"Tech Cryptors"} date={{"day":1, "month":3,"year":2024}} />}/>
          <Route path='form' element={<Form/>}/>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  <footer/>
  </>
  );
}
export default App;