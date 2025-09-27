import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import '@mantine/core/styles.css';

import routes from './routes.jsx';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
   <MantineProvider>
    <StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StrictMode>
   </MantineProvider>
)
