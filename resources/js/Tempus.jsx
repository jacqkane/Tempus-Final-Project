import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Context from './Context.js';


export default function ReactAppName() {

    return (
        <>
            <App />
        </>
    )   
}
const container = document.getElementById('tempus');
const root = createRoot(container); 
root.render(<ReactAppName />);