import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 32,
  },
  subtitle: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 8,
  },
  container: {
    alignContent: 'center',
    alignSelf: 'center',
    flex: 1,
    width: 300,
    height: 300,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buttonBox: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'black',
  },
});
