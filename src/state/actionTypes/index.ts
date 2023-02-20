export enum ActionType {
  FETCH_USERS = 'fetch_users',
  // FETCH_USERS_COMPLETE = 'fetch_users_complete',
  // FETCH_USERS_ERROR = 'fetch_users_error',
  CLEAR_USERS = 'clear_users',
  CLEAR_ONE_USER = 'clear_one_user',
  // Alert
  SET_ALERT = 'set_alert',
  REMOVE_ALERT = 'remove_alert',
  // User Detail
  GET_SINGLE_USER = 'get_single_user',
  GET_USER_REPOS = 'get_user_repos',
  // UI
  FETCH_START = 'fetch_start',
  FETCH_END = 'fetch_end',
  FETCH_ERROR = 'fetch_error',
}
