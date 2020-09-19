import React from 'react';
import './styles.scss';

const mocked = {
  title: 'Mission Name',
  date: '10.12.2015',
};

export const MissionTitle: React.FC = () => {
  return (
    <div className='mission-title'>
      <p className='mission-title-name'>{mocked.title}</p>
      <p className='mission-title-date'>{mocked.date}</p>
    </div>
  );
};
