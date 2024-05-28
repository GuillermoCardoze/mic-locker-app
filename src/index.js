import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import routes from "./routes"


const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);