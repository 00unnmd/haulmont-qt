import { useSelector, useDispatch } from 'react-redux';
import { getLaunchesRequest } from '../../services';

export const useLaunches = () => {
  const getLaunchesProcessing = async () => {
    const onSuccess = (success: []) => {
      console.log(success);
      return success;
      // processing data and dispatching success action
    };
    const onError = (error: string) => {
      //dispatching an error action
      return error;
    };

    try {
      await getLaunchesRequest({ onSuccess, onError });
    } catch (error) {
      console.log(error);
    }
  };

  return { getLaunchesProcessing };
};
