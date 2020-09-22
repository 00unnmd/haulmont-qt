import React from 'react';

import './styles.scss';

interface IProps {
  title: string;
  variables: string[];
  handleOnChange: (current: string) => void;
}

export const FilterDropdown: React.FC<IProps> = props => {
  const { title, variables, handleOnChange } = props;
  return (
    <div className='filter'>
      <p className='filter-title'>{title}</p>
      <select
        className='filter-dropdown'
        onChange={event => {
          handleOnChange(event.target.value);
        }}
      >
        {variables.map((item: string, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};
