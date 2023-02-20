import { FC } from 'react';
import { Repository } from '../../../interfaces/Repository';

type Props = {
  repos: Repository[];
};

const RepoList: FC<Props> = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg">
      <div>
        <h2 className="text-3xl my-4 font-bold"></h2>
      </div>
      {repos.map((repo) => (
        <h3>{repo.name}</h3>
      ))}
    </div>
  );
};

export default RepoList;
