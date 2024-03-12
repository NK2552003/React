import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import Card from './Card';
import './App.css'; // Make sure to create some basic styles for the cards in App.css

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Replace with your actual endpoint URL
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Data from Google Sheets</h1>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} title={item.userId} content={item.title} body={item.body} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)