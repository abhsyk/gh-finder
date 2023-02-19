import { FC, FormEvent, useState } from 'react';
import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const UserSearch: FC = () => {
  const [text, setText] = useState('');
  const { searchUsers, clearUsers, setAlert } = useAction();
  const { users } = useTypedSelector((state) => state.githubs);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (text.trim().length <= 0) {
      return setAlert('Please enter something.', 'error');
    } else {
      searchUsers(text);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-rows-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full pr-40 bg-gray-200 text-black p-4 rounded-lg outline-none"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none rounded-r-lg w-36 bg-gray-700 py-4"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="flex">
          <button onClick={clearUsers} disabled={!text.length}>
            CLEAR
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
