import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Load frameworks/global CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

createRoot(document.getElementById('root')).render(<App />);