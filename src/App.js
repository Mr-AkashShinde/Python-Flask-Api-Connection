import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Welcome to My App</h1>
      </header>
      <main>
        <p>{data.message}</p>
      </main>
      <footer>
        <p>Footer </p>
      </footer>
    </div>
  );
}

export default App;
