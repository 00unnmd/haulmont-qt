import { Launch } from '../../types/Launch';

export const SAVE_LAUNCHES = 'SAVE_LAUNCHES';
export const ERROR_LAUNCHES = 'ERROR_LAUNCHES';
export const SAVE_FILTERS_VARIABLES = 'SAVE_FILTERS_VARIABLES';
export const SAVE_CURRENT_LAUNCH_SITE = 'SAVE_CURRENT_LAUNCH_SITE';
export const SAVE_CURRENT_ROCKET = 'SAVE_CURRENT_ROCKET';
export const SAVE_FILTERED_LAUNCHES = 'SAVE_FILTERED_LAUNCHES';

interface SaveLaunchesAction {
  type: typeof SAVE_LAUNCHES;
  launches: Launch[];
}
interface ErrorLaunchesAction {
  type: typeof ERROR_LAUNCHES;
  error: string;
}
interface SaveFiltersVariablesAction {
  type: typeof SAVE_FILTERS_VARIABLES;
  launchSites: string[];
  rockets: string[];
}
interface SaveCurrentLaunchAction {
  type: typeof SAVE_CURRENT_LAUNCH_SITE;
  currentLaunchSite: string;
}
interface SaveCurrentRocketAction {
  type: typeof SAVE_CURRENT_ROCKET;
  currentRocket: string;
}
interface SaveFilteredLaunchesAction {
  type: typeof SAVE_FILTERED_LAUNCHES;
  filteredLaunches: Launch[];
}
export type LaunchActionsTypes =
  | SaveLaunchesAction
  | ErrorLaunchesAction
  | SaveFiltersVariablesAction
  | SaveCurrentLaunchAction
  | SaveCurrentRocketAction
  | SaveFilteredLaunchesAction;

export interface LaunchesState {
  launches: Launch[];
  isLoading: boolean;
  error: string;
  filtersVariables: {
    launch_site_variables: string[];
    rocket_variables: string[];
  };
  launchSiteCurrent: string;
  rocketCurrent: string;
  filteredLaunches: Launch[];
}
