import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavButton = ({ navigation, path, label }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(path)}>
      <Text style={styles.button}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 17,
    fontFamily: 'EternalBattleBold',
    color: '#d20000',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1,
  },
});

export default NavButton;
