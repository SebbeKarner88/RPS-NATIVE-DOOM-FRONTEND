import React, { useEffect, useState } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TitleBox from '../components/TitleBox';
import GameButton from '../components/GameButton';
import Card from '../components/Card';
import { getData } from './HomeScreen';
import IP_BASEURL from '../../services/IP Config';
import MonsterCard from '../components/MonsterCard';

const GameStatusFetch = async () => {
  try {
    return fetch(IP_BASEURL + '/games/gameID', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: await getData('token'),
        gameId: await getData('gameId'),
      },
    }).then((response) => response.json());
  } catch (e) {
    console.log(e.message);
  }
};

const MakeMoveFetch = async (token, sign) => {
  try {
    return fetch(IP_BASEURL + '/games/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: token,
        gameId: await getData('gameId'),
        sign: sign,
      },
    }).then((response) => response.json());
  } catch (e) {
    console.log(e.message);
  }
};

const GameBoardScreen = ({ navigation }) => {
  const [player, setPlayer] = useState('');
  const [opponent, setOpponent] = useState('');
  const [oppMove, setOppMove] = useState('');
  const [playerMove, setPlayerMove] = useState('');
  const [result, setResult] = useState('');
  const [timer, setTimer] = useState(30);

  let time = 30;

  useEffect(() => {
    const interval = setInterval(async () => {
      await GameStatusFetch().then(async (res) => {
        if (res.playerOne.userId === (await getData('token'))) {
          setOpponent(res.playerTwo.username);
          setPlayer(res.playerOne.username);
        }
        if (res.playerTwo.userId === (await getData('token'))) {
          setOpponent(res.playerOne.username);
          setPlayer(res.playerTwo.username);
        }

        if (player !== '' && opponent !== '') {
          clearInterval(interval);
        }
      });
    }, 1000);

    if (opponent) {
      const newInterval = setInterval(async () => {
        await GameStatusFetch().then(async (res) => {
          if (time >= 0) {
            time -= 1;
            setTimer(time);
          }

          if (time === 0) {
            navigation.navigate('Home');
          }

          if (res.playerMove && res.opponentMove) {
            setResult(res.gameStatus);
            if (res.playerOne.userId === (await getData('token'))) {
              setOppMove(res.opponentMove);
              setPlayerMove(res.playerMove);
            } else {
              setOppMove(res.playerMove);
              setPlayerMove(res.opponentMove);
            }
            clearInterval(newInterval);
          }
        });
      }, 1000);
    }
  }, [opponent]);

  const HandleMove = async (token, move) => {
    await MakeMoveFetch(token, move);
  };

  const HandleMonsterOpponent = (opponentMove) => {
    switch (opponentMove) {
      case 'ROCK':
        return require('../../assets/monster1.webp');
      case 'PAPER':
        return require('../../assets/monster2.webp');
      case 'SCISSORS':
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

  const HandleResultMessage = (result) => {
    switch (result) {
      case 'WIN':
        return 'YOU WIN';
      case 'DRAW':
        return 'WOUNDED';
      case 'LOSE':
        return 'YOU DIED';
    }
  };

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
          <TitleBox title={opponent} />
          {result ? <View height={80}></View> : <GameButton title={timer} />}
          <View height={150} style={[styles.cardBox, styles.cardBoxOpponent]}>
            {result ? (
              <MonsterCard image={HandleMonsterOpponent(oppMove)} />
            ) : (
              <View height={150}></View>
            )}
          </View>
          <View style={styles.cardBox}>
            {result ? null : (
              <Card
                image={require('../../assets/Doom-chainsaw.webp')}
                rotate={true}
                handleMove={async () => {
                  await HandleMove(await getData('token'), 'rock');
                }}
              />
            )}

            {result ? (
              <Card
                image={HandleWeaponPlayer(playerMove)}
                rotate={true}
                handleMove={() => {}}
              />
            ) : (
              <Card
                image={require('../../assets/Doom-plasmagun.webp')}
                rotate={true}
                handleMove={async () => {
                  await HandleMove(await getData('token'), 'paper');
                }}
              />
            )}

            {result ? null : (
              <Card
                image={require('../../assets/massiveGun.webp')}
                rotate={true}
                handleMove={async () => {
                  await HandleMove(await getData('token'), 'scissors');
                }}
              />
            )}
          </View>
        </View>
        <TitleBox title={result ? HandleResultMessage(result) : player} />
      </View>
    </ImageBackground>
  );
};

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

export default GameBoardScreen;
