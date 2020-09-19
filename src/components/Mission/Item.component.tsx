import React from 'react';
import { MissionPatch, MissionTitle, MissionDetails } from '../../components';

export const Item: React.FC = () => {
  return (
    <div className='mission'>
      <MissionPatch />
      <MissionTitle />
      <MissionDetails />
    </div>
  );
};
