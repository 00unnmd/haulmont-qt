import { LaunchesState, SAVE_LAUNCHES, ERROR_LAUNCHES, LaunchActionsTypes } from './types';

const defaultState: LaunchesState = {
  launches: [],
  isLoading: true,
  error: '',
};

export const launchesReducer = (
  state = defaultState,
  action: LaunchActionsTypes
): LaunchesState => {
  switch (action.type) {
    case SAVE_LAUNCHES: {
      return {
        ...state,
        launches: action.launches,
        isLoading: false,
      };
    }
    case ERROR_LAUNCHES: {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
