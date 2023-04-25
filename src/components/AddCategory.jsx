import { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setinputValue] = useState('');
  const onInputChange = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Buscar gifs'
      onChange={onInputChange}
      value={inputValue}
    />
  );
};
