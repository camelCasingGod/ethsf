import './App.css';
import { Wallet } from 'ethers';
import { Client } from '@xmtp/xmtp-js';
import { useState } from 'react';
// import { WorldIDWidget } from "@worldcoin/id";

// var xmtpClient;

// async function initializeXMTP() {
//   let xmtp = await Client.create(wallet);
//   console.log(xmtp);
// }

function App() {
  const [message, setMessage] = useState(''); // checks textfield

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = () => {
    if (!(message === "")) {
      setMessage('');
      console.log(message);
    } else {
      console.log("Please... enter a message. Last warning.");
    }
  };

  // initializeXMTP();
  return (
    <div className="App">
      <header className="App-header">
        <div className="Messaging">
          <input
            type="text"
            placeholder='message...'
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
          />
          <br></br>
          <button onClick={handleClick}>Send</button>
          <br></br>
          <p id="error"></p>
          <br></br>
        </div>
      </header>
    </div>
  );
}

export default App;
