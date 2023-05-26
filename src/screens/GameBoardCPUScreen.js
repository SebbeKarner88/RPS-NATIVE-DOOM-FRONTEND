import { View, ImageBackground, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import MonsterCard from '../components/MonsterCard';
import Card from '../components/Card';
import TitleBox from '../components/TitleBox';

function generateRandomNumber(min, max) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === null) {
    return generateRandomNumber(min, max);
  } else {
    return randomNum;
  }
}

const GameBoardCPUScreen = ({ navigation }) => {
  const CPUmove = generateRandomNumber(1, 4);
  const [playerMove, setPlayerMove] = useState('');
  const [result, setResult] = useState('');

  function botChoice() {
    if (CPUmove === 1) {
      if (playerMove === 'ROCK') {
        setResult('WOUNDED');
      }
      if (playerMove === 'PAPER') {
        setResult('YOU DIED');
      }
      if (playerMove === 'SCISSORS') {
        setResult('YOU WIN');
      }
    }
    if (CPUmove === 2) {
      if (playerMove === 'ROCK') {
        setResult('YOU WIN');
      }
      if (playerMove === 'PAPER') {
        setResult('WOUNDED');
      }
      if (playerMove === 'SCISSORS') {
        setResult('YOU DIED');
      }
    }
    if (CPUmove === 3) {
      if (playerMove === 'ROCK') {
        setResult('YOU DIED');
      }
      if (playerMove === 'PAPER') {
        setResult('YOU WIN');
      }
      if (playerMove === 'SCISSORS') {
        setResult('WOUNDED');
      }
    }
  }

  const HandleMonsterOpponent = (opponentMove) => {
    switch (opponentMove) {
      case 1:
        return require('../../assets/monster1.webp');
      case 2:
        return require('../../assets/monster2.webp');
      case 3:
        return require('../../assets/monster3.webp');
    }
  };

  const HandleWeaponPlayer = (playerMove) => {
    switch (playerMove) {
      case 'ROCK':
        return require('../../assets/Doom-chainsaw.webp');
      case 'PAPER':
        return require('../../assets/Doom-plasmagun.webp');
      case 'SCISSORS':
        return require('../../assets/massiveGun.webp');
    }
  };

  useEffect(() => {
    if (playerMove) botChoice();
  }, [playerMove]);

  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require('../../assets/Doom-background.webp')}
    >
      <View>
        <Header navigation={navigation} />
        <View>
          <TitleBox title={'Computer'} />
          <View height={80}></View>
          <View height={150} style={[styles.cardBox, styles.cardBoxOpponent]}>
            {result ? (
              <MonsterCard image={HandleMonsterOpponent(CPUmove)} />
            ) : (
              <View height={150}></View>
            )}
          </View>
          <View style={styles.cardBox}>
            {result ? null : (
              <Card
                image={require('../../assets/Doom-chainsaw.webp')}
                handleMove={() => {
                  setPlayerMove('ROCK');
                }}
              />
            )}

            {result ? (
              <Card
                image={HandleWeaponPlayer(playerMove)}
                handleMove={() => {}}
              />
            ) : (
              <Card
                image={require('../../assets/Doom-plasmagun.webp')}
                handleMove={() => {
                  setPlayerMove('PAPER');
                }}
              />
            )}

            {result ? null : (
              <Card
                image={require('../../assets/massiveGun.webp')}
                rotate={true}
                handleMove={() => {
                  setPlayerMove('SCISSORS');
                }}
              />
            )}
          </View>
        </View>
        <TitleBox title={result ? result : 'Player'} />
      </View>
    </ImageBackground>
  );
};

export default GameBoardCPUScreen;

const styles = StyleSheet.create({
  cardBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardBoxOpponent: {
    paddingTop: 30,
  },
});
