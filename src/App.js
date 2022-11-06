import './App.css';
// import { Wallet } from 'ethers';
// import { Client } from '@xmtp/xmtp-js';
import { useState } from 'react';
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

const WEB3_STORAGE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQwYzc3ZUUwM0Y0MDFhMTQyMDQ2NjMxQjNGNEMzM2FEMDY0OUMzRWYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njc3MTA4NjM2ODAsIm5hbWUiOiJUZXN0IEtleSBNYW5hZ2VyIn0.oODXirFTXVHouR_0u1qKMB43_ZHpXw-WTTtwAfukOKg";

function getAccessToken () {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  return WEB3_STORAGE_KEY;

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

// var xmtpClient;

// async function initializeXMTP() {
//   let xmtp = await Client.create(wallet);
//   console.log(xmtp);
// }

function App() {
  const [message, setMessage] = useState(''); // checks textfield
  const web3StorageClient = makeStorageClient();
  console.log(web3StorageClient);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = async () => {
    if (!(message === "")) {
      setMessage('');
      console.log(message);
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
