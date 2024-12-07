import Link from 'next/link';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 text-white font-sans">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Welcome to Artificial Base</h1>
        <p className="text-lg mb-8">
          At <span className="font-semibold">Artificial Base</span>, we strive to develop innovative and user-friendly applications 
          that make everyday tasks easier and more efficient.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Apps</h2>
        <ul className="list-disc list-inside mb-8">
          <li>
            <strong>Counter App:</strong> A simple app designed to help you count things easily and efficiently.
  
            <Link href="/counter-app" className="text-blue-400 hover:underline ml-5">View Privacy Policy
            </Link>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
          Artificial Base is dedicated to creating applications with a focus on simplicity, functionality, 
          and privacy. Our apps are developed with care to ensure user satisfaction and data security.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
