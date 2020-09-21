import React from 'react';
import { MissionList, FilterDropdown } from '../../components';
import './styles.scss';

const data = [
  {
    title: '123',
    date: '05.12.2019',
  },
];

export const Main: React.FC = () => {
  return (
    <div className='main-page'>
      <div className='main-page-title'>
        <h1>Launches</h1>
      </div>
      <div className='main-page-filters'>
        <FilterDropdown />
        <FilterDropdown />
      </div>
      <div className='main-page-missions'>
        <MissionList />
      </div>
    </div>
  );
};
