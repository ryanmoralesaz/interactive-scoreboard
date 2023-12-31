import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
  //   const { players, title } = props;
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      {/* <span className='stats'>Players: {props.totalPlayers}</span> */}
      <Stopwatch />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};
Header.defaultProps = {
  title: 'Scoreboard'
};
export default Header;
