import React, { useState } from 'react';

const Search = () => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
    onChange = { handleChange };
  };

  return (
    <input
      type='text'
      onChange={handleChange}
      value={value}
      title={`example`}
    />
  );
};

export default Search;
