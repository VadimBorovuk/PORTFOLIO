import React from 'react';

const SelectBackground = ({value, onChange}) => {
  return (
      <select
          className="bg-transparent py-2 pl-6 rounded-2xl outline-none focus:ring-0 focus:border-transparent cursor-pointer font-bold tracking-tight"
          title="Change background"
          value={value} onChange={(e) => onChange(e)}>
        <option value="first">Dark moon</option>
        <option value="second">Dark thin</option>
        <option value="third">Dark purple</option>
        <option value="four">Dark blue dott</option>
        <option value="five">Dark light cell</option>
      </select>
  );
};

export default SelectBackground;
