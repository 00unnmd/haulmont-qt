import { Launch } from '../../types/Launch';
import { SAVE_LAUNCHES, ERROR_LAUNCHES, SAVE_FILTERS_VARIABLES, LaunchActionsTypes } from './types';

export const launchesSaver = (launches: Launch[]): LaunchActionsTypes => ({
  type: SAVE_LAUNCHES,
  launches,
});

export const launchesError = (error: string): LaunchActionsTypes => ({
  type: ERROR_LAUNCHES,
  error,
});

export const filtersVariablesSaver = (
  launchSites: string[],
  rockets: string[]
): LaunchActionsTypes => ({
  type: SAVE_FILTERS_VARIABLES,
  launchSites,
  rockets,
});
