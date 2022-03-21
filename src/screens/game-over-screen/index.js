import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {
  YouLostAnimation,
  YouWinAnimation,
} from './../../components/lottiePlayer/index';

const GameOverScreen = ({winner, restart}) => {
  let winnerMessage =
    winner === 'YouWon'
      ? 'You are the winner'
      : winner === 'IAWon'
      ? 'IA Won, you lost'
      : "it's a Tie!";
  return (
    <View>
      <Text style={styles.title}>TicTacToe</Text>
      <Text style={styles.subtitle}>Results!</Text>
      <Text style={styles.title}>{winnerMessage}</Text>
      {winner === 'YouWon' ? <YouWinAnimation /> : null}
      {winner === 'IAWon' ? <YouLostAnimation /> : null}
      <Button title={'Restart'} onPress={() => restart(true)} />
    </View>
  );
};

export default GameOverScreen;
