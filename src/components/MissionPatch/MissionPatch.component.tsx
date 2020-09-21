import React from 'react';

import './styles.scss';

interface IProps {
  patch: string;
}

export const MissionPatch: React.FC<IProps> = props => {
  return (
    <div className='mission-patch'>
      <img className='mission-patch-image' src={props.patch} alt='Mission patch' />
    </div>
  );
};
