import React, { useState } from 'react'; // Import useState hook
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [inputValue, setInputValue] = useState(''); // Initialize state for the input
  const [savedValue, setSavedValue] = useState(''); // State to track saved input value


  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to save the input value
  const handleSaveClick = () => {
    setSavedValue(inputValue); // Save the current input value
    
    const baseUrl = process.env.REACT_APP_RECIPINATOR_BACKEND_SERVICE;
    console.log(`calling ${baseUrl}`)
    axios.get(`${baseUrl}/generate-recipe/${inputValue}`).then(response=>{
      console.log(response);
    });
    
    console.log(`Saved value: ${inputValue}`); // Print the saved value to the console

  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Recipenator
        </p>

        {/* Add input box */}
        <input 
          type="text" 
          placeholder="Enter a recipe..." 
          value={inputValue}
          onChange={handleInputChange} 
        />

        {/* Save button */}
        <button onClick={handleSaveClick}>Save</button>

        {/* Display the saved input */}
        <p>Saved value: {savedValue}</p> {/* Using savedValue in the UI */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>

  );
}

export default App;
