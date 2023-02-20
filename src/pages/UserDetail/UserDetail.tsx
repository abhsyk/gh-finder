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
                    rel="noreferrer"
                    className="border px-4 py-2 rounded-lg hover:bg-white hover:text-slate-600"
                  >
                    Visit GIthub Profile
                  </a>
                </div>
                <div className="flex mt-5 w-full rounded-lg shadow-md">
                  {user.location && (
                    <div className="w-full p-5">
                      <div className="text-slate-400">Location</div>
                      <div className="text-lg font-bold">{user.location}</div>
                    </div>
                  )}
                  {user.blog && (
                    <>
                      <div className="border-l border-l-slate-500" />
                      <div className="w-full p-5">
                        <div className="text-slate-400">Website</div>
                        <div className="text-lg font-bold">
                          <a
                            href={`https://${user.blog}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {user.blog}
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                  {user.twitter_username && (
                    <>
                      <div className="border-l border-l-slate-500" />
                      <div className="w-full p-5">
                        <div className="text-slate-400">Twitter</div>
                        <div className="text-lg font-bold">
                          <a
                            href={`https://twitter.com/${user.twitter_username}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {user.twitter_username}
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full rounded-lg shadow-md">
              {/* Followers */}
              <div className="flex justify-between items-center w-full p-5">
                <div>
                  <div className="text-slate-400">Followers</div>
                  <div className="text-3xl md:text-4xl font-bold">
                    {user.followers}
                  </div>
                </div>
                <div className="text-pink-500">
                  <FaUsers className="text-3xl md:text-5xl" />
                </div>
              </div>
              <div className="border-l border-l-slate-500" />
              {/* Following */}
              <div className="flex justify-between items-center w-full p-5">
                <div>
                  <div className="text-slate-400">Following</div>
                  <div className="text-3xl md:text-4xl font-bold">
                    {user.following}
                  </div>
                </div>
                <div className="text-pink-500">
                  <FaUserFriends className="text-3xl md:text-5xl" />
                </div>
              </div>
              <div className="border-l border-l-slate-500" />
              {/* Public Repos */}
              <div className="flex justify-between items-center w-full p-5">
                <div>
                  <div className="text-slate-400">Public Repos</div>
                  <div className="text-3xl md:text-4xl font-bold">
                    {user.public_repos}
                  </div>
                </div>
                <div className="text-pink-500">
                  <FaCodepen className="text-3xl md:text-5xl" />
                </div>
              </div>
              <div className="border-l border-l-slate-500" />
              {/* Public Gists */}
              <div className="flex justify-between items-center w-full p-5">
                <div>
                  <div className="text-slate-400">Public Gists</div>
                  <div className="text-3xl md:text-4xl font-bold">
                    {user.public_gists}
                  </div>
                </div>
                <div className="text-pink-500">
                  <FaStore className="text-3xl md:text-5xl" />
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
