import { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';
import logo from '../assets/cropped-kpk-logo.png'; // Ensure the path is correct

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Departments', path: '/departments' },
    { name: 'Services', path: '/services' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-green-900 text-white shadow-md">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="bg-white flex items-center justify-center rounded-xl w-16 h-16">
            {/* <span className="font-bold text-green-900">KPK</span> */}
            <img src={logo} alt="KPK" />
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-bold">Government of Khyber Pakhtunkhwa</h1>
            <p className="text-sm">Official Web Portal</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 rounded-full text-gray-800 focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full flex items-center">
            <FaUser className="mr-2" /> Login
          </button>
        </div>
        
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation */}
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-green-800`}>
        <ul className="flex flex-col md:flex-row">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.path} 
                className="block px-6 py-3 hover:bg-green-700 transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}