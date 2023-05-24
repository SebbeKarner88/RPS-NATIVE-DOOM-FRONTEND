import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';
import Header from '../components/Header';
import { removeData } from './HomeScreen';
import { useState, useEffect} from 'react'
import HighScoreItems from '../components/HighScoreItems';



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
        navigation.navigate('Home');
      };

     const CountStats = () => {
        console.log(allGames);
        let win = 0;
        let lose = 0;
        let draw = 0;
    
        setDraws(0);
        setWins(0);
        setLosses(0);
    
        allGames ?.forEach((game) => {

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
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require('../../assets/Doom-background.webp')}
    >
      <View>
        <Header navigation={navigation} />
      </View>
      <View>
        <TouchableWithoutFeedback onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={allGames}
        keyExtractor={(item) => item.gameStatusId}
        renderItem={({ item }) => {
          return(
            <HighScoreItems playerName={item.playerOne.username} opponentName={item.playerTwo.username} status={item.gamestatus}/>
          )
        }}
      />
    </ImageBackground>
  );
};

export default UserpageScreen;

const styles = StyleSheet.create({

});
