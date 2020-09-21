import React from 'react';

import './styles.scss';

interface IProps {
  details: string;
}

export const MissionDetails: React.FC<IProps> = props => {
  return (
    <div className='mission-details'>
      <p className='mission-details-content'>{props.details}</p>
    </div>
  );
};
