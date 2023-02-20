import { FC, useEffect } from 'react';
import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Spinner } from '../../ui';
import UserItem from '../UserItem';

const UserList: FC = () => {
  // const { fetchUsers } = useAction();
  const {
    githubs: { users },
    ui: { loading },
  } = useTypedSelector((state) => state);

  // useEffect(() => {
  //   fetchUsers();
  // }, [fetchUsers]);

  if (loading) return <Spinner />;

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users && users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
