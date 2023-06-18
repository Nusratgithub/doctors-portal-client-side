import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button 
            className="btn bg-gradient-to-r from-success to-info text-white">{children}</button>
    );
};

export default PrimaryButton;