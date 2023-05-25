import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
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
    AllGamesFetch().then((game) => {
      setAllGames(game);
    });
  }, []);

  useEffect(() => {
    CountStats();
  }, [allGames]);

  return (
    <View>
      <Header navigation={navigation} />
      <View>
        <TouchableWithoutFeedback>
          <Text onPress={handleLogout}>Logout</Text>
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
  );
};
const styles = StyleSheet.create({});

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
