import React, { useEffect } from 'react';
import { MissionList, FilterDropdown } from '../../components';
import './styles.scss';

import { useLaunches } from '../../hooks/launches/useLaunches';

export const Main: React.FC = () => {
  const { launches, error, filtersVariables, getLaunchesProcessing } = useLaunches();

  useEffect(() => {
    getLaunchesProcessing();
  }, []);

  useEffect(() => {
    console.log('LAUNCHES: ', launches);
  }, [launches]);

  useEffect(() => {
    console.log('FILTERS VARIABLES: ', filtersVariables);
  }, [filtersVariables]);

  return (
    <div className='main-page'>
      <div className='main-page-title'>
        <h1>Launches</h1>
      </div>
      <div className='main-page-filters'>
        <FilterDropdown title='Launch Site' variables={filtersVariables.launch_site_variables} />
        <FilterDropdown title='Rocket' variables={filtersVariables.rocket_variables} />
      </div>
      <div className='main-page-missions'>
        <MissionList data={launches} />
      </div>
    </div>
  );
};
