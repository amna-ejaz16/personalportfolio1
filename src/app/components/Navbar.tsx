// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
      {/* Logo or Title */}
      <h1 className="text-2xl font-bold">AMNA EJAZ</h1>
      
      {/* Button Links Section */}
      <div className="space-x-4 hidden md:flex">
        <Link href="/" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition duration-300">
          Home
        </Link>
        <Link href="/about" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition duration-300">
          About
        </Link>
        <Link href="/contact" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition duration-300">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;

