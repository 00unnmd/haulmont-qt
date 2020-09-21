import React from 'react';

import './styles.scss';

export const MissionPatch: React.FC = () => {
  return (
    <div className='mission-patch'>
      <img
        className='mission-patch-image'
        src='https://reactjs.org/logo-og.png'
        alt='Mission patch'
      />
    </div>
  );
};
