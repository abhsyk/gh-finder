import { FC } from 'react';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';
import { Repository } from '../../../interfaces/Repository';

type Props = {
  repo: Repository;
};

const RepoItem: FC<Props> = ({ repo }) => {
  return (
    <div className="mb-2 rounded-md">
      <div className="p-8 bg-gray-800 rounded-lg hover:bg-opacity-80 transition">
        <h3 className="mb-4 text-xl font-semibold">
          <a href={repo.html_url}>
            <FaLink className="inline mr-2 opacity-70" />
            {repo.name}
          </a>
        </h3>
        <div className="ml-6">
          <p className="mb-3">{repo.description}</p>
          <div className="flex">
            <div className="flex items-center rounded-xl px-3 w-fit bg-sky-800 text-sky-400 bg-opacity-30 mr-2">
              <FaEye className="inline mr-2" />
              {repo.watchers_count}
            </div>

            <div className="flex items-center rounded-xl px-3 w-fit bg-green-800 text-green-400 bg-opacity-30 mr-2">
              <FaStar className="inline mr-2" />
              {repo.stargazers_count}
            </div>

            <div className="flex items-center rounded-xl px-3 w-fit bg-red-800 text-red-400 bg-opacity-30 mr-2">
              <FaInfo className="inline mr-2" />
              {repo.open_issues}
            </div>

            <div className="flex items-center rounded-xl px-3 w-fit bg-yellow-800 text-yellow-400 bg-opacity-30 mr-2">
              <FaUtensils className="inline mr-2" />
              {repo.forks}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
