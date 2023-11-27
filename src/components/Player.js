import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown';
const Player = ({
  name,
  score,
  id,
  changeScore,
  removePlayer,
  isHighScore
}) => {
  return (
    <div className='player'>
      {console.log(name + ' rendered')}
      <span className='player-name'>
        <button className='remove-player' onClick={() => removePlayer(id)}>
          ✖
        </button>
        <Crown isHighScore={isHighScore} />
        {name}
      </span>

      <Counter id={id} changeScore={changeScore} score={score} />
    </div>
  );
};
Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number,
  removePlayer: PropTypes.func,
  changeScore: PropTypes.func,
  isHighScore: PropTypes.bool.isRequired
};

const playerPropsAreEqual = (prevProps, nextProps) => {
  return (
    prevProps.score === nextProps.score &&
    prevProps.isHighScore === nextProps.isHighScoer
  );
};
export default memo(Player, playerPropsAreEqual);
