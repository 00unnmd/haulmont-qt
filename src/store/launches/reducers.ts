import {
  LaunchesState,
  SAVE_LAUNCHES,
  ERROR_LAUNCHES,
  SAVE_FILTERS_VARIABLES,
  SAVE_CURRENT_LAUNCH_SITE,
  SAVE_CURRENT_ROCKET,
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
  launchSiteCurrent: 'all',
  rocketCurrent: 'all',
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
      const { launchSites, rockets } = action;
      launchSites.splice(0, 0, 'all');
      rockets.splice(0, 0, 'all');
      return {
        ...state,
        filtersVariables: {
          launch_site_variables: launchSites,
          rocket_variables: rockets,
        },
      };
    }
    case SAVE_CURRENT_LAUNCH_SITE: {
      return {
        ...state,
        launchSiteCurrent: action.currentLaunchSite,
      };
    }
    case SAVE_CURRENT_ROCKET: {
      return {
        ...state,
        rocketCurrent: action.currentRocket,
      };
    }

    default: {
      return state;
    }
  }
};
