import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
const App = () => {
  const [players, setPlayers] = React.useState([
    {
      name: 'Guil',
      id: 1,
      score: 0
    },
    {
      name: 'Treasure',
      id: 2,
      score: 0
    },
    {
      name: 'Ashley',
      id: 3,
      score: 0
    },
    {
      name: 'James',
      id: 4,
      score: 0
    }
  ]);
  // const [nextPlayerId, setNextPlayerId] = useState(5);
  const nextPlayerId = useRef(5);
  const [highScore, setHighScore] = useState();

  useEffect(() => {
    const scores = players.map((p) => p.score);
    setHighScore(Math.max(...scores));
  }, [players]);

  const handleRemovePlayer = (id) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== id)
    );
  };
  const handleScoreChange = (id, delta) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (id === player.id) {
          return {
            ...player,
            score: player.score + delta
          };
        }
        return player;
      })
    );
  };

  const handleAddPlayer = (name) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        name,
        score: 0,
        id: nextPlayerId.current
      }
    ]);
    nextPlayerId.current++;
    // setNextPlayerId((prevId) => prevId + 1);
  };
  return (
    <div className='scoreboard'>
      <Header players={players} />

      {/* Players list */}
      {players.map((player) => (
        <Player
          isHighScore={player.score === highScore && highScore != 0}
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      ))}
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
};

export default App;
