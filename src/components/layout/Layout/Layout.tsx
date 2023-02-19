import { FC, PropsWithChildren } from 'react';
import { Footer, Navbar } from '../../common';
import { Alert } from '../../ui';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col bg-slate-600">
      <Navbar />
      <main className="container flex flex-col mx-auto px-3 pb-12 pt-10 text-white">
        <Alert />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
