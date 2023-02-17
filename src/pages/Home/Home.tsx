import { motion } from 'framer-motion';
import { FC } from 'react';
import { UsersList } from '../../components/users';

const Home: FC = () => {
  return (
    <div>
      <div className="overflow-hidden py-8">
        <motion.h1
          variants={titleAnim}
          initial="hidden"
          animate="show"
          className="text-3xl"
        >
          Home
        </motion.h1>
      </div>
      <UsersList />
    </div>
  );
};

export const titleAnim = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

export default Home;
