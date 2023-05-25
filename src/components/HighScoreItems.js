import { View, Text, StyleSheet, Platform } from 'react-native';

const HighScoreItems = ({ playerName, opponentName, status }) => {
  return (
    <View style={styles.listItem}>
      <Text>{playerName} :</Text>
      <Text>{opponentName} :</Text>
      <Text>{status}</Text>
    </View>
  );
};

export default HighScoreItems;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#1A5F7A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: Platform.OS === 'android' ? 8 : null,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
