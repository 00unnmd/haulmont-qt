import { Launch } from '../../types/Launch';

export const SAVE_LAUNCHES = 'SAVE_LAUNCHES';
export const ERROR_LAUNCHES = 'ERROR_LAUNCHES';
export const SAVE_FILTERS_VARIABLES = 'SAVE_FILTERS_VARIABLES';

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
export type LaunchActionsTypes =
  | SaveLaunchesAction
  | ErrorLaunchesAction
  | SaveFiltersVariablesAction;

export interface LaunchesState {
  launches: Launch[];
  isLoading: boolean;
  error: string;
  filtersVariables: {
    launch_site_variables: string[];
    rocket_variables: string[];
  };
}
