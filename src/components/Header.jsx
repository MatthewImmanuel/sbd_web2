import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <span className="ml-2 text-3xl font-bold">Netlab</span>
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link
          to="/os"
          className="border border-gray-300 px-3 py-2 rounded text-gray-600 hover:text-blue-600 hover:border-blue-600"
        >
          OS
        </Link>
        <Link
          to="/dmj"
          className="border border-gray-300 px-3 py-2 rounded text-gray-600 hover:text-blue-600 hover:border-blue-600"
        >
          DMJ
        </Link>
        <Link
          to="/sbd"
          className="border border-gray-300 px-3 py-2 rounded text-gray-600 hover:text-blue-600 hover:border-blue-600"
        >
          SBD
        </Link>
      </nav>
    </header>
  );
};

export default Header;
