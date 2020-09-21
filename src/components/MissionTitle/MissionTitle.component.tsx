import React from 'react';
import './styles.scss';

interface IProps {
  name: string;
  date: string;
}

export const MissionTitle: React.FC<IProps> = props => {
  return (
    <div className='mission-title'>
      <p className='mission-title-name'>{props.name}</p>
      <p className='mission-title-date'>{props.date}</p>
    </div>
  );
};
