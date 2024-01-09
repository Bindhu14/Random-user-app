// src/App.js
import React, {useState} from 'react';
import RandomUserList from './random';
import './App.css';

function App() {
  const [numberOfUsers, setNumberOfUsers] = useState(6);

  const handleInputChange = (event) => {
    const inputNumber = parseInt(event.target.value, 10);
    if (!isNaN(inputNumber) && inputNumber > 0) {
      setNumberOfUsers(inputNumber);
    }
  };

  return (
    <div className="app">
      <div className="input-container">
        <label htmlFor="userCountInput">Enter the number of users:</label>
        <input
          type="number"
          id="userCountInput"
          value={numberOfUsers}
          onChange={handleInputChange}
        />
      </div>
      <RandomUserList numberOfUsers={numberOfUsers} />
    </div>
  );
}

export default App;