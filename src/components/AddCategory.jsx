import { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setinputValue] = useState('');
  const onInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
};
