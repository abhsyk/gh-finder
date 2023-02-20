import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Spinner } from '../../components/ui';

const UserDetail: FC = () => {
  const params = useParams<{ id: string }>();
  const { getOneUser } = useAction();
  const { user, loading } = useTypedSelector((state) => state.githubs);

  console.log(user);

  useEffect(() => {
    getOneUser(params.id!);
  }, [params.id]);

  if (loading) return <Spinner />;

  return (
    <>
      {user && (
        <div>
          <div className="w-full mx-auto lg:w-10/12">
            <div className="mb-4 w-fit border-b border-b-transparent hover:border-b-white">
              <Link to="/" className="flex items-center">
                <IoArrowBackOutline />
                <span className="ml-2">Back to Search</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 mt-2">
              <div className="relative mb-6 md:mb-0">
                <div className="rounded-lg shadow-xl custom-card-image opacity-50 overflow-hidden hover:opacity-60 transition">
                  <img src={user.avatar_url} alt="" />
                </div>
                <div className="absolute bottom-6 left-7 justify-end">
                  <h2 className="text-xl">{user.name}</h2>
                  <p>{user.login}</p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <div className="px-4 mb-1 ml-2 font-bold bg-green-700 text-green-400 rounded-2xl text-center h-fit">
                    {user.type}
                  </div>
                  {user.hireable && (
                    <div className="px-4 mb-1 ml-2 font-bold bg-sky-700 rounded-2xl text-sky-400 h-fit">
                      Hireble
                    </div>
                  )}
                </div>
                <p className="mt-3">{user.bio}</p>
                <div className="mt-8">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferer"
                    className="border px-4 py-2 rounded-lg hover:bg-white hover:text-slate-600"
                  >
                    Visit GIthub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetail;
