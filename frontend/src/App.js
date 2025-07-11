import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/hello')
      .then(res => res.json())
      .then(data => setHello(data.message))
      .catch(() => setHello('Error fetching message'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{hello}</p>
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
