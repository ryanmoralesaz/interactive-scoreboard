import React, { useRef } from 'react';

const AddPlayerForm = (props) => {
  //   const [value, setValue] = useState('');
  const playerInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addPlayer(playerInput.current.value);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      {console.log(playerInput)}
      <input
        type='text'
        ref={playerInput}
        placeholder="Enter a player's name"
        // value={value}
        // onChange={(event) => setValue(event.target.value)}
      />
      <input type='submit' value='Add a player' />
    </form>
  );
};
export default AddPlayerForm;
