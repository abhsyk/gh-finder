import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex justify-center bg-gray-700 p-10 text-white">
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
