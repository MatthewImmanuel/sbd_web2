import React from 'react';
import logoOS from '../assets/LogoOS.svg';  

export const OS = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img
      src={logoOS}
      alt="Logo OS"
      className="h-40 w-40 mr-6"  
    />

    <div className="border p-8 rounded-lg shadow-md bg-gray-50">
      <h2 className="text-5xl font-bold mb-4">OS</h2>  
      <p className="text-2xl">
        Tung tung tung tung Sahur
      </p>
    </div>
  </div>
);

export default OS;