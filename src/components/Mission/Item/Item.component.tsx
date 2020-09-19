import React from 'react';
import { MissionPatch, MissionTitle, MissionDetails } from '../..';

import './styles.scss';

export const Item: React.FC = () => {
  return (
    <div className='mission'>
      <MissionPatch />
      <MissionTitle />
      <MissionDetails />
    </div>
  );
};
