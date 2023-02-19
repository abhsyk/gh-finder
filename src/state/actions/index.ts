import { AlertsAction } from './alertsActions';
import { GithubsAction } from './githubsActions';

export type Action = GithubsAction | AlertsAction;
