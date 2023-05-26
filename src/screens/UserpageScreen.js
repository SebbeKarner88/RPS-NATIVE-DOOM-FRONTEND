import React, {useEffect, useState} from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    View,
    ImageBackground,
} from 'react-native';
import IP_BASEURL from '../../services/IP Config';
import {getData, removeData} from './HomeScreen';
import Header from '../components/Header';
import {TouchableWithoutFeedback} from 'react-native-web';
import HighScoreItems from '../components/HighScoreItems';
import {NavigationActions} from 'react-navigation';
import PlayerCard from "../components/PlayerCard";

const AllGamesFetch = async () => {
    try {
        return fetch(IP_BASEURL + '/games/allGames', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                token: await getData('token'),
            },
        }).then((response) => response.json());
    } catch (e) {
    }
};

const UserpageScreen = ({navigation}) => {
    const [allGames, setAllGames] = useState([]);
    const [wins, setWins] = useState(0);
    const [draws, setDraws] = useState(0);
    const [losses, setLosses] = useState(0);
    const [username, setUsername] = useState('');

    const handleLogout = () => {
        removeData('username');
        removeData('token');
        navigation.reset([NavigationActions.navigate({routeName: 'Home'})], 0);
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
        getData('username').then(res => setUsername(res));
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
            <View style={{alignItems: 'center'}}>
                <Header navigation={navigation}/>
                <View style={styles.playerCard}>
                    <PlayerCard
                        name={username}
                        wins={wins}
                        draws={draws}
                        losses={losses}/>
                </View>
                <View style={styles.logoutContainer}>
                    <TouchableWithoutFeedback>
                        <Text style={styles.textContainer} onPress={handleLogout}>
                            Logout
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
                <FlatList
                    data={allGames}
                    keyExtractor={(item) => item.gameStatusId}
                    renderItem={({item}) => {
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
        backgroundColor: 'rgba(0,0,0,0.62)',
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
    playerCard: {

    }
});

export default UserpageScreen;
