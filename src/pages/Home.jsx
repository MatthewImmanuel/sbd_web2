import React from 'react';
import logo from '../assets/Logo.svg';  

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img src={logo} alt="Logo Netlab" className="h-32 w-32 mb-6" />
      <h2 className="text-5xl font-bold mb-4">Home</h2>
      <p className="text-3xl text-center">
        Welcome to Netlab by Matthew -_-
      </p>
    </div>
  );
};

export default Home;