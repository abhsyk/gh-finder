import { FC } from 'react';
import { Repository } from '../../../interfaces/Repository';
import RepoItem from '../RepoItem';

type Props = {
  repos: Repository[];
};

const RepoList: FC<Props> = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg mt-4 p-6">
      <div>
        <h2 className="text-3xl my-4 font-bold">Latest Repositories</h2>
      </div>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
