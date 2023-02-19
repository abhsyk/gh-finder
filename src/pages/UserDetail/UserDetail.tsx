import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const UserDetail: FC = () => {
  const params = useParams<{ id: string }>();
  const { getOneUser } = useAction();
  const { user } = useTypedSelector((state) => state.githubs);
  console.log(user);

  useEffect(() => {
    getOneUser(params.id!);
  }, [params.id]);

  return (
    <div>
      UserDetail
      <h1>{user.login}</h1>
    </div>
  );
};

export default UserDetail;
