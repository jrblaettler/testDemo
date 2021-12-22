import React, { useState } from 'react';

const Button = () => {
  const [value, setValue] = useState("I'm a button");

  const someFunc = () => {
    setValue('No touchy touchy!');
  };

  return (
    <>
      <button onClick={someFunc} title='test'>
        {value}
      </button>
    </>
  );
};

export default Button;
