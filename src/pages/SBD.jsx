import React from 'react';
import logoSBD from '../assets/LogoSBD.svg';  

export const SBD = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img
      src={logoSBD}
      alt="Logo SBD"
      className="h-40 w-40 mr-6"
    />
    <div className="border p-6 rounded-lg shadow-md bg-gray-50">
      <h2 className="text-5xl font-bold mb-4">SBD</h2>
      <p className="text-2xl">
        Bombardilo Crocodilo
      </p>
    </div>
  </div>
);

export default SBD;