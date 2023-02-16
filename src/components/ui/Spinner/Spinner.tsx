import { FC } from 'react';

const items = new Array(12).fill('').map((_, index) => ({ id: index }));

const Spinner: FC = () => {
  return (
    <div className="w-full text-center mt-20">
      <div className="lds-default">
        {items.map((item) => (
          <div key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Spinner;
