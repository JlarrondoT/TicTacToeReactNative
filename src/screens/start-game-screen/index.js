import React from 'react';
import {View, Button, Text} from 'react-native';
import {styles} from './styles';

const StartGameScreen = ({userSelectionButton}) => {
  return (
    <View>
      <Text style={styles.title}>TicTacToe</Text>
      <Text style={styles.subtitle}>Pick a side</Text>
      <Button
        title={'Circle (O)'}
        color="#841584"
        onPress={() => userSelectionButton('O')}
      />
      <Button
        title={'Cross (X)'}
        color="#841584"
        onPress={() => userSelectionButton('X')}
      />
    </View>
  );
};

export default StartGameScreen;
