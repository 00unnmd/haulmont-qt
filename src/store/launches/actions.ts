import { Launch } from '../../types/Launch';
import {
  SAVE_LAUNCHES,
  ERROR_LAUNCHES,
  SAVE_FILTERS_VARIABLES,
  SAVE_CURRENT_LAUNCH_SITE,
  SAVE_CURRENT_ROCKET,
  LaunchActionsTypes,
} from './types';

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

export const currentLaunchSiteSaver = (currentLaunchSite: string): LaunchActionsTypes => ({
  type: SAVE_CURRENT_LAUNCH_SITE,
  currentLaunchSite,
});

export const currentRocketSaver = (currentRocket: string): LaunchActionsTypes => ({
  type: SAVE_CURRENT_ROCKET,
  currentRocket,
});
