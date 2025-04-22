import React from 'react';
import logoDMJ from '../assets/LogoDMJ.svg';  

export const DMJ = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img
      src={logoDMJ}
      alt="Logo DMJ"
      className="h-40 w-40 mr-6"
    />
    <div className="border p-8 rounded-lg shadow-md bg-gray-50">
      <h2 className="text-5xl font-bold mb-4">DMJ</h2>
      <p className="text-3xl">
        tes123
      </p>
    </div>
  </div>
);

export default DMJ;