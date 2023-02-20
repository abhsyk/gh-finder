import { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Alert: FC = () => {
  const { message, type } = useTypedSelector((state) => state.alerts);

  return (
    <>
      {message && (
        <div className="flex justify-center items-center mb-4 space-x-2">
          <span className="p-1 bg-yellow-300 text-black rounded-full text-sm">
            <FaTimes />
          </span>
          <p className="flex-1 text-base font-semibold leading-7 text-white">
            {type === 'error' && <strong>{message}</strong>}
          </p>
        </div>
      )}
    </>
  );
};

export default Alert;
