import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { launchesSaver, launchesError } from '../../store/launches/actions';
import { getLaunchesRequest } from '../../services';
import { UPCOMING, NOIMAGE } from '../../constants';

export const useLaunches = () => {
  const { launches, isLoading, error } = useSelector((state: RootState) => ({
    launches: state.launches.launches,
    isLoading: state.launches.isLoading,
    error: state.launches.error,
  }));
  const dispatch = useDispatch();

  const dataProcessing = async (arr: []) => {
    return Array.from(arr, (item: any) => {
      return {
        id: item.flight_number,
        patch: item.links.mission_patch_small ?? NOIMAGE,
        name: item.mission_name,
        date: new Date(item.launch_date_local).toLocaleDateString('en-GB'),
        details: item.details ?? UPCOMING,
      };
    });
  };

  const getLaunchesProcessing = async () => {
    const onSuccess = async (success: []) => {
      let res = await dataProcessing(success);
      console.log('RES IS: ', res);

      dispatch(launchesSaver(res));
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
