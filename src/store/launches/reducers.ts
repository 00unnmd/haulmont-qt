import {
  LaunchesState,
  SAVE_LAUNCHES,
  ERROR_LAUNCHES,
  SAVE_FILTERS_VARIABLES,
  LaunchActionsTypes,
} from './types';

const defaultState: LaunchesState = {
  launches: [],
  isLoading: true,
  error: '',
  filtersVariables: {
    launch_site_variables: [],
    rocket_variables: [],
  },
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
    case SAVE_FILTERS_VARIABLES: {
      return {
        ...state,
        filtersVariables: {
          launch_site_variables: action.launchSites,
          rocket_variables: action.rockets,
        },
      };
    }

    default: {
      return state;
    }
  }
};
