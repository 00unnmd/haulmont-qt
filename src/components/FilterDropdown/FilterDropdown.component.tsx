import React from 'react';

import './styles.scss';

export const FilterDropdown: React.FC = () => {
  return (
    <div className='filter'>
      <p className='filter-title'>Launch Site</p>
      <select className='filter-dropdown'>
        <option>123</option>
        <option>456</option>
        <option>789</option>
      </select>
    </div>
  );
};
