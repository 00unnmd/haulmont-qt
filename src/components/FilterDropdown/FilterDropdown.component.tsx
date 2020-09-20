import React from 'react';

import './styles.scss';

export const FilterDropdown: React.FC = () => {
  return (
    <div className='filter'>
      <select className='filter-dropdown'>
        <option>123</option>
        <option>456</option>
        <option>789</option>
      </select>
    </div>
  );
};
