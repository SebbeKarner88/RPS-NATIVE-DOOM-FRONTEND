import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  ImageBackground,
} from 'react-native';
import IP_BASEURL from '../../services/IP Config';
import { getData, removeData } from './HomeScreen';
import Header from '../components/Header';
import { TouchableWithoutFeedback } from 'react-native-web';
import HighScoreItems from '../components/HighScoreItems';
import { NavigationActions } from 'react-navigation';

const AllGamesFetch = async () => {
  try {
    return fetch(IP_BASEURL + '/games/allGames', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: await getData('token'),
      },
    }).then((response) => response.json());
  } catch (e) {}
};

const UserpageScreen = ({ navigation }) => {
  const [allGames, setAllGames] = useState([]);
  const [wins, setWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [losses, setLosses] = useState(0);
  const [username, setUsername] = useState('');

  const handleLogout = () => {
    removeData('username');
    removeData('token');
    navigation.reset([NavigationActions.navigate({ routeName: 'Home' })], 0);
    navigation.navigate('Home');
  };

  const CountStats = () => {
    let win = 0;
    let lose = 0;
    let draw = 0;

    setDraws(0);
    setWins(0);
    setLosses(0);

    allGames.forEach((game) => {
      console.log(game.gameStatus);
      if (game.gameStatus === 'WIN') {
        win++;
      }
      if (game.gameStatus === 'DRAW') {
        draw++;
      }
      if (game.gameStatus === 'LOSE') {
        lose++;
      }
    });
    setDraws(draw);
    setWins(win);
    setLosses(lose);
  };

  useEffect(() => {
    setUsername(getData(username));
    AllGamesFetch().then((game) => {
      setAllGames(game);
    });
  }, []);

  useEffect(() => {
    CountStats();
  }, [allGames]);

  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require('../../assets/Doom-background.webp')}
    >
      <View>
        <Header navigation={navigation} />
        <View style={styles.logoutContainer}>
          <TouchableWithoutFeedback>
            <Text style={styles.textContainer} onPress={handleLogout}>
              Logout
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <Text>
          Wins: {wins} , Draws: {draws} , Losses: {losses}
        </Text>
        <FlatList
          data={allGames}
          keyExtractor={(item) => item.gameStatusId}
          renderItem={({ item }) => {
            return (
              <HighScoreItems
                playerName={item.playerOne.username}
                opponentName={item.playerTwo.username}
                status={item.gameStatus}
              />
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  logoutContainer: {
    margin: 30,
    borderWidth: 1,
    borderColor: '#d20000',
    borderRadius: 8,
    width: '30%',
    padding: 8,
  },
  textContainer: {
    fontSize: 17,
    fontFamily: 'EternalBattleBold',
    color: '#d20000',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 8,
  },
});

export default UserpageScreen;

//  const CountStats = async () => {
//             let token = await getData('token');
//             allGames
//                 .forEach(game => {
//                     if (game.playerOne.userId === token) {
//                         if (game.gameStatus === 'WIN') {
//                             setWins(wins + 1);
//                         } else if (game.gameStatus === 'DRAW') {
//                             setDraws(draws + 1);
//                         } else if (game.gameStatus === 'LOSE') {
//                             setLosses(losses + 1);
//                         }
//                     }
//                 });
//         }
// ROCK = CHAINSAW
// PAPER = PLASMAGUN
// SCISSORS = MASSIVEGUN

// ROCK = MONSTER 1
// PAPER = MONSTER 2
// SCISSORS = MONSTER 3
