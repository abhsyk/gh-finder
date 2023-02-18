import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <nav className="flex items-center bg-slate-800 h-20 shadow-lg min-h-full">
      <div className="flex items-center container mx-auto">
        <div className="flex-none px-2 mx-2 text-white">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            Github Finder
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2 text-white">
          <div className="flex justify-end">
            <Link
              to="/"
              className="py-2 px-4 rounded-3xl hover:bg-slate-700 transition-colors"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="py-2 px-4 rounded-3xl hover:bg-slate-700 transition-colors"
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
