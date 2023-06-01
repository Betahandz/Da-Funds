import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import AppProvider from './Hooks/Context';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <BrowserRouter>
        <AppProvider>
            <App />
        </AppProvider>
    </BrowserRouter>
)