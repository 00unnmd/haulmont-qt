import { Launch } from '../../types/Launch';

export const SAVE_LAUNCHES = 'SAVE_LAUNCHES';
export const ERROR_LAUNCHES = 'ERROR_LAUNCHES';

interface SaveLaunchesAction {
  type: typeof SAVE_LAUNCHES;
  launches: Launch[];
}
interface ErrorLaunchesAction {
  type: typeof ERROR_LAUNCHES;
  error: string;
}

export type LaunchActionsTypes = SaveLaunchesAction | ErrorLaunchesAction;

export interface LaunchesState {
  launches: Launch[];
  isLoading: boolean;
  error: string;
}
