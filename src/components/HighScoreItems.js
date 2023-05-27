import {View, Text, StyleSheet, Platform, Dimensions} from 'react-native';

const SetColor = (status) => {

  switch (status) {
    case 'WIN':
      return '#2aa104';
    case 'DRAW':
      return '#b9a302'
    case 'LOSE':
      return '#b90202'
  }
}

const HighScoreItems = ({ opponentName, status }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.opponentText}>Opponent: {opponentName}</Text>
      <Text style={[styles.resultText, {color: SetColor(status)}]}>{status}</Text>
    </View>
  );
};

export default HighScoreItems;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'rgba(0,0,0,0.73)',
    margin: 15,
    justifyContent: "center",
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: '#d20000',
    borderWidth: 2,
    width: Dimensions.get('window').width * 0.5,
    elevation: Platform.OS === 'android' ? 8 : null,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    overflow: 'visible'
  },
  opponentText: {
    color: '#a8a8a8',
    fontFamily: 'EternalUiRegular',
    fontSize: 20,
  },
  resultText: {
    marginTop: 15,
    fontFamily: 'EternalUiRegular',
    fontSize: 20,
  },

});
