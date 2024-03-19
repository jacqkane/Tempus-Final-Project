import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';


export default function ReactAppName() {

    return (
        <>
            <App />
        </>
    )
}

const container = document.getElementById('tempus');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ReactAppName />);