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
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: '#d20000',
    borderWidth: 2,
    width: Dimensions.get('window').width * 0.9,
    elevation: Platform.OS === 'android' ? 8 : null,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  opponentText: {
    textAlign: 'left',
    color: '#a8a8a8',
    fontFamily: 'EternalUiRegular',
    fontSize: 20,
  },
  resultText: {
    textAlign: 'left',
    fontFamily: 'EternalUiRegular',
    fontSize: 20,
  },

});
