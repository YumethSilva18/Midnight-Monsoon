import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

console.log('Starting React app...');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('React app rendered successfully');
} else {
  console.error('Root element not found!');
  document.body.innerHTML = '<div style="color: red; padding: 20px; font-family: Arial;">Error: Root element not found!</div>';
}