import { combineReducers } from 'redux';

import { launchesReducer } from './launches/reducers';

export const rootReducer = combineReducers({
  launches: launchesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
