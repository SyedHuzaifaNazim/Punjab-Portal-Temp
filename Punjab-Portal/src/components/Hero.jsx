import React from 'react';
import logo from '../assets/cropped-kpk-logo.png'; // Make sure the path is correct

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="bg-gray-800 w-full h-64 md:h-96 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4">
            <img src={logo} alt="Khyber Pakhtunkhwa Government Logo" className="w-full h-full object-cover rounded-xl" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Welcome to Khyber Pakhtunkhwa Government Portal</h2>
          <p>Gateway to government services and information</p>
        </div>
      </div>
    </div>
  );
}
