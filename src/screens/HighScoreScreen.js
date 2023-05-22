import React, {useEffect, useState} from "react";
import {Text, StyleSheet, FlatList} from "react-native";
import IP_BASEURL from "../../services/IP Config";
import {View} from "react-native-web";
import {getData} from "./HomeScreen";


const AllGamesFetch = async () => {
    try {
        return fetch(IP_BASEURL + '/games/allGames', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: await getData('token')
            },
        })
            .then((response) => response.json())
    } catch (e) {
    }
}

const HighScoreScreen = ({navigation}) => {

        const [allGames, setAllGames] = useState([])
        const [wins, setWins] = useState(0)
        const [draws, setDraws] = useState(0)
        const [losses, setLosses] = useState(0)

        const CountStats = () => {
            let win = 0
            let lose = 0
            let draw = 0

            setDraws(0)
            setWins(0)
            setLosses(0)

            allGames
                .forEach(game => {
                    console.log(game.gameStatus);
                    if (game.gameStatus === "WIN") {
                        win++;
                    }
                    if (game.gameStatus === "DRAW") {
                        draw++;
                    }
                    if (game.gameStatus === "LOSE") {
                        lose++;
                    }
                });
            setDraws(draw)
            setWins(win)
            setLosses(lose)
        }

        useEffect(() => {
            AllGamesFetch()
                .then(game => {
                    setAllGames(game);
                });
        }, []);

        useEffect(() => {
            CountStats();
        }, [allGames]);


        return (
            <View>
                <Text>Wins: {wins} , Draws: {draws} , Losses: {losses}</Text>
                <FlatList
                    data={allGames}
                    keyExtractor={item => item.gameStatusId}
                    renderItem={({item}) =>
                        <View style={{margin: 10}}>
                            <Text>GameStatus= {item.gameStatus}</Text>
                            <Text>GameStatusId= {item.gameStatusId}</Text>
                            <Text>OpponentMove= {item.opponentMove}</Text>
                            <Text>PlayerMove= {item.playerMove}</Text>
                            <Text>PlayerName= {item.playerOne.username}</Text>
                            <Text>OpponentName= {item.playerTwo.username}</Text>
                        </View>
                    }/>
            </View>
        );

    }
;

const styles = StyleSheet.create({});

export default HighScoreScreen;

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