import { Launch } from '../../types/Launch';
import { SAVE_LAUNCHES, ERROR_LAUNCHES, LaunchActionsTypes } from './types';

export const launchesSaver = (launches: Launch[]): LaunchActionsTypes => ({
  type: SAVE_LAUNCHES,
  launches,
});

export const launchesError = (error: string): LaunchActionsTypes => ({
  type: ERROR_LAUNCHES,
  error,
});
