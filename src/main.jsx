import React from 'react'
import App from './App'
import './style/global.scss'
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
        <Analytics />
    </BrowserRouter>
);
