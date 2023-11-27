import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ score, id, changeScore }) => {
  //   const id = props.id;
  //   const [score, setScore] = React.useState(0);

  //   const incrementScore = () => {
  //     setScore((prevScore) => prevScore + 1);
  //   };

  //   const decrementScore = () => {
  //     setScore((prevScore) => prevScore - 1);
  //   };

  return (
    <div className='counter'>
      <button
        className='counter-action decrement'
        onClick={() => changeScore(id, -1)}
      >
        {' '}
        -{' '}
      </button>
      <span className='counter-score'>{score}</span>
      <button
        className='counter-action increment'
        onClick={() => changeScore(id, +1)}
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
};

Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};
export default Counter;