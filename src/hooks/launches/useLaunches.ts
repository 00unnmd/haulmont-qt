import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { launchesSaver, launchesError } from '../../store/launches/actions';
import { Launch } from '../../store/launches/types';
import { getLaunchesRequest } from '../../services';

export const useLaunches = () => {
  const { launches, isLoading, error } = useSelector((state: RootState) => ({
    launches: state.launches.launches,
    isLoading: state.launches.isLoading,
    error: state.launches.error,
  }));
  const dispatch = useDispatch();

  const getLaunchesProcessing = async () => {
    const onSuccess = (success: Launch[]) => {
      dispatch(launchesSaver(success));
      // processing data and dispatching success action
    };
    const onError = (error: string) => {
      dispatch(launchesError(error));
    };

    try {
      await getLaunchesRequest({ onSuccess, onError });
    } catch (error) {
      console.log(error);
    }
  };

  return { launches, isLoading, error, getLaunchesProcessing };
};
