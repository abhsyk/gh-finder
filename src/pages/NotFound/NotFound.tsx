import { FC } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-lg flex flex-col items-center">
        <h1 className="text-8xl font-bold mb-8">Oops!</h1>
        <p className="text-5xl mb-8">404 - Page not found</p>
        <Link
          to="/"
          className="flex justify-center items-center w-44 rounded-lg bg-purple-700 px-4 py-2 hover:bg-purple-600 transition-colors"
        >
          <FaHome className="mr-2" />
          <span>BACK TO HOME</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
