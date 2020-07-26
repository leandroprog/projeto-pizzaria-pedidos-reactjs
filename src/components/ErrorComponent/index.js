import React, { useState, use } from 'react';


const ErrorBoundary = ({ children }) => {

    try {
        console.log('children');    
    }catch {
        console.log('Error');
    }
 

    const [hasError, setHasError] = useState(false); 

    const getDerivedStateFromError = () => {
        console.log('Passou');
        setHasError(true)
    }

    return (
        <>
        <h1>Teste</h1>
       { children}
        </>
        )
};

export default ErrorBoundary;