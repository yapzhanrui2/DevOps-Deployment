import { useState, useEffect } from 'react'
import styles from './App.module.css'

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5172/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error('Error:', error);
        setMessage('Failed to load message');
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>
      <div className={styles.message}>{message}</div>
    </div>
  );
}

export default App;