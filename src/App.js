import React from 'react';
import { connect } from 'react-redux';
import { useState} from 'react';

import Nationalize from './components/Nationalize';
import { getNationalize } from './actions';
import './App.css';



function App(props) {

  const [nameInput, setNameInput] = useState('')
  

  const handleChange = (e) => {
    setNameInput(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getNationalize(nameInput)
    setNameInput('')
  }

  return (
    <div className="App">
      <h1>Find Nationality</h1>

      <form>
        <input onChange={handleChange} value={nameInput} />
        <button onClick={handleSubmit}>Search</button>
      </form>

      <Nationalize />
      
    </div>
  );
}

export default connect(null, { getNationalize })(App);
