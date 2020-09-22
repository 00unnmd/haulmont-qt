import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { launchesSaver, launchesError, filtersVariablesSaver } from '../../store/launches/actions';
import { getLaunchesRequest } from '../../services';
import { UPCOMING, NOIMAGE } from '../../constants';
import { Launch } from '../../types/Launch';

export const useLaunches = () => {
  const { launches, isLoading, error, filtersVariables } = useSelector((state: RootState) => ({
    launches: state.launches.launches,
    isLoading: state.launches.isLoading,
    error: state.launches.error,
    filtersVariables: state.launches.filtersVariables,
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
        launch_site: {
          name: item.launch_site.site_name,
          name_long: item.launch_site.site_name_long,
        },
        rocket: {
          name: item.rocket.rocket_name,
          type: item.rocket.rocket_type,
        },
      };
    });
  };
  const getFilterVariables = async (updArr: Launch[], searchField: string) => {
    let filterVariables: string[] = Array.from(
      //@ts-ignore
      new Set(updArr.map((item: Launch) => item[searchField]['name']))
    );
    return filterVariables.filter(value => value != null);
  };

  const getLaunchesProcessing = async () => {
    const onSuccess = async (success: []) => {
      let updatedLaunches = await dataProcessing(success);
      let launchSites = await getFilterVariables(updatedLaunches, 'launch_site');
      let rockets = await getFilterVariables(updatedLaunches, 'rocket');

      dispatch(launchesSaver(updatedLaunches));
      dispatch(filtersVariablesSaver(launchSites, rockets));
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

  return { launches, isLoading, error, filtersVariables, getLaunchesProcessing };
};
