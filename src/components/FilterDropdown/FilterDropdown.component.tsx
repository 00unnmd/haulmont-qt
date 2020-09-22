import React from 'react';

import './styles.scss';

interface IProps {
  title: string;
  variables: string[];
}

export const FilterDropdown: React.FC<IProps> = props => {
  const { title, variables } = props;
  return (
    <div className='filter'>
      <p className='filter-title'>{title}</p>
      <select className='filter-dropdown'>
        {variables.map((item: string, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};
