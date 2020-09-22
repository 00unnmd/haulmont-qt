import React, { useEffect } from 'react';
import { MissionList, FilterDropdown, Loader } from '../../components';
import './styles.scss';

import { useLaunches } from '../../hooks/launches/useLaunches';

export const Main: React.FC = () => {
  const {
    isLoading,
    filtersVariables,
    filteredLaunches,
    getLaunchesProcessing,
    saveCurrentLaunchSite,
    saveCurrentRocket,
  } = useLaunches();

  useEffect(() => {
    getLaunchesProcessing();
  }, []);

  return (
    <div className='main-page'>
      <div className='main-page-title'>
        <h1>Launches</h1>
      </div>
      <div className='main-page-filters'>
        <FilterDropdown
          title='Launch Site'
          variables={filtersVariables.launch_site_variables}
          handleOnChange={saveCurrentLaunchSite}
        />
        <FilterDropdown
          title='Rocket'
          variables={filtersVariables.rocket_variables}
          handleOnChange={saveCurrentRocket}
        />
      </div>
      <div className='main-page-missions'>
        {isLoading ? <Loader /> : <MissionList data={filteredLaunches} />}
      </div>
    </div>
  );
};
