import React, {useEffect, useState} from 'react';

import {SafeAreaView} from 'react-native';

import {styles} from './styles';
import StartGameScreen from './screens/start-game-screen';
import GameOverScreen from './screens/game-over-screen';
import InGameScreen from './screens/in-game-screen';

const App = () => {
  const [userSide, setUserSide] = useState('X');
  const [iASide, setIASide] = useState('O');
  const [currentView, setCurrentView] = useState('startGameScreen');
  const [winner, setWinner] = useState('TIE');

  const handleUserSelection = userSelection => {
    setUserSide(userSelection);
    setIASide(userSelection === 'X' ? 'O' : 'X');
    setCurrentView('Game');
  };

  const handleEndGame = input => {
    let isTie = input === 'TIE';
    if (input === 'IACheckmate') {
      setWinner('YouWon');
    } else if (!isTie) {
      setWinner(input === userSide ? 'YouWon' : 'IAWon');
    }
    setCurrentView('GameOver');
  };
  const restartGame = input => {
    if (input) {
      setCurrentView('startGameScreen');
      setWinner('TIE');
    }
  };

  let whichView = <StartGameScreen userSelectionButton={handleUserSelection} />;

  if (currentView === 'Game') {
    whichView = (
      <InGameScreen
        userSide={userSide}
        iASide={iASide}
        endGame={handleEndGame}
      />
    );
  } else if (currentView === 'GameOver') {
    whichView = <GameOverScreen winner={winner} restart={restartGame} />;
  }

  return <SafeAreaView style={styles.container}>{whichView}</SafeAreaView>;
};

export default App;
