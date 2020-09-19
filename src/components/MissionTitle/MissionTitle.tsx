import React from 'react';
import './styles.scss';

const mocked = {
  title: 'Mission Name',
  date: '10.12.2015',
};

export const MissionTitle = () => {
  return (
    <div className='mission-title'>
      <h3 className='mission-title-name'>{mocked.title}</h3>
      <h3 className='mission-title-date'>{mocked.date}</h3>
    </div>
  );
};
