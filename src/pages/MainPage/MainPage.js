import React from 'react';
import ContactPage from '../subPages/ContactPage';
import LandingPage from '../subPages/LandingPage';
import PortfolioPage from '../subPages/PortfolioPage';

export default function MainPage() {
    return(
        <>
            {console.log("Main page loaded")}       
            <LandingPage />
            <PortfolioPage />
            <ContactPage />
        </>
    )
    
}