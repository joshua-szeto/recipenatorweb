import React, { useState } from 'react'; // Import useState hook
import './App.css';
import axios from 'axios';
import DisplayComponent from './DisplayComponent';
import { Form, Input, Button} from "antd";
import { Layout, Row, Col } from "antd";


function App() {

  const { Header } = Layout;

  const [inputValue, setInputValue] = useState(''); // Initialize state for the input
  const [savedValue, setSavedValue] = useState([]); // State to track saved input value


  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to save the input value
  const handleSaveClick = () => {
    const baseUrl = process.env.REACT_APP_RECIPINATOR_BACKEND_SERVICE;
    console.log(`calling ${baseUrl}`)
    axios.get(`${baseUrl}/generate-recipe/${inputValue}`).then(response=>{
      console.log(response)
      setSavedValue(response.data); // Save the current input value
    });
    
    console.log(`Saved value: ${inputValue}`); // Print the saved value to the console

  };

  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#0b2d39',
    
  };

  return (
    <div className="App">
      <Header className="header" style={headerStyle}>
            <h1 className="main-heading">RECIPENATOR</h1>
      </Header>
      <br></br>
        {/* Add input box */}
        <Form
        
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="What do you have at home"
            name="inputValue">
            <Input value={inputValue} onChange={handleInputChange} />
          </Form.Item>
        </Form>
        {/*

        {/* Save button */}
        <Button className="login-button" onClick={handleSaveClick}>
              Generate
            </Button>

        {/* Display the saved input */}
        {<DisplayComponent items={savedValue}/>} {/* Using savedValue in the UI */}

      
    </div>

  );
}

export default App;
