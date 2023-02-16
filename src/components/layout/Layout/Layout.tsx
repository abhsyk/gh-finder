import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../../common';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
