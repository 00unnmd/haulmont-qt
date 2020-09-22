import { api } from './config';

interface IArguments {
  onSuccess: (success: []) => void;
  onError: (error: string) => void;
}

export const getLaunchesRequest = async ({ onSuccess, onError }: IArguments) => {
  await api.get('/launches').then(response => {
    if (response.status === 200) {
      return onSuccess(response.data);
    } else {
      return onError('something wrong...');
    }
  });
};
