import React from 'react';
import { MissionList } from '../../components';
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
      <MissionList />
    </div>
  );
};
