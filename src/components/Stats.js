import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
  const totalPoints = props.players.reduce((total, player) => {
    return total + player.score;
  }, 0);
  return (
    <table className='stats'>
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{props.players.length}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number
    })
  )
};
export default Stats;
