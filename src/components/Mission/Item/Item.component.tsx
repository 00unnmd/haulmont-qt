import React from 'react';
import { Launch } from '../../../types/Launch';
import { MissionPatch, MissionTitle, MissionDetails } from '../../';

import './styles.scss';

interface IProps {
  item: Launch;
}

export const Item: React.FC<IProps> = props => {
  const { item } = props;
  return (
    <div className='mission'>
      <MissionPatch patch={item.patch} />
      <MissionTitle name={item.name} date={item.date} />
      <MissionDetails details={item.details} />
    </div>
  );
};
