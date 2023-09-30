/* eslint-disable import/order */
/* eslint-disable react/jsx-tag-spacing */
import React, { useLayoutEffect, useState } from 'react';
import LoadingSpinner from './components/layouts/shared/LoadingSpinner';
import Navbar from './components/layouts/shared/Navbar';
import Footer from './components/layouts/shared/Footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  const [isLoading, setIsLoading] = useState(document.readyState !== 'complete');

    useLayoutEffect(() => {
        const handlePageLoad = () => {
            setIsLoading(false);
        };

        if (!isLoading) {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, [isLoading]);
    // company Logo
    // company tag line
    if (isLoading) {
        return (
            <div>
                <LoadingSpinner/>
            </div>
        );
    }
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default App;
