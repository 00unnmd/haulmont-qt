import { api } from './config';

interface IParams {
  onSuccess: (success: []) => [];
  onError: (error: string) => string;
}

export const getLaunchesRequest = async ({ onSuccess, onError }: IParams) => {
  await api.get('/launches').then(response => {
    if (response.status === 200) {
      onSuccess(response.data);
    } else {
      return onError('something wrong');
    }
  });
};
