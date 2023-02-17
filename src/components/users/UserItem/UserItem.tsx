import { FC } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../interfaces/User';

type Props = {
  user: User;
};

const UserItem: FC<Props> = ({ user: { login, avatar_url } }) => {
  return (
    <div className="shadow-md flex items-center p-4 rounded-md hover:bg-slate-500 transition-colors">
      <div className="flex flex-row items-center">
        <div className=""></div>
        <div className="rounded-full shadow w-14 h-14 overflow-hidden">
          <img src={avatar_url} alt="Profile" />
        </div>
      </div>
      <div className="ml-3">
        <h2 className="font-bold">{login}</h2>
        <Link to={`/users/${login}`} className="text-slate-300 text-sm">
          Visit Profile
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
