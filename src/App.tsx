import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/api")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  }, []);
  return (
    <div>
      <h1>Vite + Express Full Stack App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App
