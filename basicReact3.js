import React, { useState } from "react";
import './App.css';
import TextField from "./components/textField";
import 'h8k-components';

const title = "Text Append";

function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  function handleChange(setter) {
    //grab the input value > setFinalText 
  return (event)=> {
    setter(event.target.value)
  }
  }

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-centre justify-content-center mt-50">
        <section className="layout-column">
          <div data-testid="first-text">
            <TextField labelText={'First Text'} onChange={handleChange(setText1)}/>
          </div >
          <div data-testid="second-text">
            <TextField labelText={'Second Text'} onChange={handleChange(setText2)}/>
          </div>
          <label className="mt-50 text-align-center">
            Appended Text is: 
          </label>
          <label className="mt-10 finalText" data-testid="final-text">
            {text1 + ' ' + text2}
          </label>
        </section>
      </div>
    </div>
  );
}

export default App;



______________________________________________

import React, {useState} from "react";
import "./index.css";


function TextField ({labelText, onChange}) {
  return (
    <div className="textfield">
        <label data-testid="label">{labelText}</label>
        <input data-testid="input" onChange={onChange}></input>
    </div>
  );
}

export default TextField;
