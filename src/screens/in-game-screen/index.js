import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Plays} from '../../constants/plays';

const InGameScreen = ({userSide, iASide, endGame}) => {
  const [iANumbers, setIaNumbers] = useState([]);
  const [userNumbers, setUserNumbers] = useState([]);
  const [gamePositionUserSymbols, setGamePositionUserSymbols] = useState([
    {
      id: 1,
      symbol: '',
    },
    {
      id: 2,
      symbol: '',
    },
    {
      id: 3,
      symbol: '',
    },
    {
      id: 4,
      symbol: '',
    },
    {
      id: 5,
      symbol: '',
    },
    {
      id: 6,
      symbol: '',
    },
    {
      id: 7,
      symbol: '',
    },
    {
      id: 8,
      symbol: '',
    },
    {
      id: 9,
      symbol: '',
    },
  ]);
  const [userSymbol, setUserSymbol] = useState(userSide);
  const [iASymbol, setIASymbol] = useState(iASide);
  const [firstUserNumer, setFirstUserNumber] = useState(0);
  const [firstIANumber, setFirstIANumber] = useState(0);
  const [iARoundCounter, setIARoundCounter] = useState(0);

  const updateUserChoose = input => {
    let iaFirstMovement = false;
    if (firstUserNumer === 0) {
      let generatedNumber = Math.floor(Math.random() * (9 - 1 + 1) + 1);
      if (generatedNumber === input) {
        updateUserChoose(input);
      } else {
        initializeIA(generatedNumber);
        iaFirstMovement = true;
      }
    }
    if (checkAvailablePositions()) {
      endGame('TIE');
    }
    if (!checkAvailablePosition(input)) {
      return;
    }
    let items = [...gamePositionUserSymbols];
    let found = gamePositionUserSymbols.find(x => x.id === input);
    found.symbol = userSymbol;
    setGamePositionUserSymbols(items);
    setUserNumbers([...userNumbers, input]);
    setFirstUserNumber(input);
    if (!iaFirstMovement) {
      updateIASelection();
    }
    evaluateWhoWon();
  };

  const updateIASelection = () => {
    if (firstIANumber === 0) {
      return;
    }
    let nextGuess;
    let plays = Plays.find(x => x.id === firstIANumber).plays;
    console.log('playing Numbers pre filter: ', plays);
    plays.forEach(x => {
      if (checkAvailablePosition(x)) {
        nextGuess = x;
      }
    });
    console.log('nextGuess', nextGuess);

    if (checkAvailablePositions()) {
      endGame('TIE');
      return;
    }
    if (
      checkIACheckmate(
        plays,
        gamePositionUserSymbols.filter(x => x.symbol === '').map(x => x.id),
      )
    ) {
      endGame('IACheckmate');
      return;
    }

    let items = [...gamePositionUserSymbols];
    let found = gamePositionUserSymbols.find(x => x.id === nextGuess);
    found.symbol = iASymbol;
    setGamePositionUserSymbols(items);
    setIaNumbers([...iANumbers, nextGuess]);
    setIARoundCounter(iARoundCounter + 1);
    evaluateWhoWon();
  };

  const checkIACheckmate = (iAPlays, availablePositions) => {
    let found = 0;
    iAPlays.forEach(x => {
      if (availablePositions.find(y => x === y)) {
        found = availablePositions.find(y => x === y);
      }
    });
    return found === 0;
  };

  const evaluateWhoWon = () => {
    let winConditions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    let xPlayer = gamePositionUserSymbols.filter(x => x.symbol === 'X');
    let xPlayerMarks = xPlayer.map(x => x.id);

    let oPlayer = gamePositionUserSymbols.filter(x => x.symbol === 'O');
    let oPlayerMarks = oPlayer.map(x => x.id);

    winConditions.forEach(x => {
      if (x.join(',') === xPlayerMarks.sort().slice(0, 3).join(',')) {
        endGame('X');
      }
      if (x.join(',') === xPlayerMarks.sort().slice(1, 4).join(',')) {
        endGame('X');
      }
      if (x.join(',') === oPlayerMarks.sort().slice(0, 3).join(',')) {
        endGame('O');
      }
      if (x.join(',') === oPlayerMarks.sort().slice(1, 4).join(',')) {
        endGame('O');
      }
    });
  };

  const checkAvailablePositions = () => {
    return gamePositionUserSymbols.every(x => x.symbol !== '');
  };

  const checkAvailablePosition = id => {
    return gamePositionUserSymbols.find(x => x.id === id).symbol === '';
  };

  const initializeIA = input => {
    let items = [...gamePositionUserSymbols];
    let found = gamePositionUserSymbols.find(x => x.id === input);
    found.symbol = iASymbol;
    setGamePositionUserSymbols(items);
    setIaNumbers([...iANumbers, input]);
    setFirstIANumber(input);
    console.log('IA jugara con: ', input);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Press one block to start the Game</Text>
      {gamePositionUserSymbols.map(i => (
        <TouchableOpacity
          key={'button' + i.id}
          style={styles.buttonBox}
          onPress={() => updateUserChoose(i.id)}>
          <Text style={styles.buttonText}>{i.symbol}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default InGameScreen;
