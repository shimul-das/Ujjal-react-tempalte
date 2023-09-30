
/* eslint-disable key-spacing */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable function-paren-newline */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable semi */

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);