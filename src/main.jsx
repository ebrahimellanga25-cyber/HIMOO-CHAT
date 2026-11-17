import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>HIMOO CHAT</h1>
      <p>Welcome to HIMOO CHAT</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
