import { AlertsAction } from './alertsActions';
import { GithubsAction } from './githubsActions';
import { UIAction } from './uiActions';
import { UserDetailAction } from './userDetailActions';

export type Action = GithubsAction | AlertsAction | UIAction | UserDetailAction;
