import React from 'react';
import { Launch } from '../../../types/Launch';
import { Item } from '../Item/Item.component';

import './styles.scss';

interface IProps {
  data: Launch[];
}

export const MissionList: React.FC<IProps> = props => {
  return (
    <div className='missions-list'>
      {props.data.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
