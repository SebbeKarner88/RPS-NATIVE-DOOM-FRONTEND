import React, {useEffect, useState} from "react";
import {ImageBackground, View, StyleSheet, Image} from "react-native";
import Header from "../components/Header";
import TitleBox from "../components/TitleBox";
import GameButton from "../components/GameButton";
import Card from "../components/Card";
import {getData} from "./HomeScreen";
import IP_BASEURL from "../../services/IP Config";

const GameStatusFetch = async () => {
    try {
        return fetch(IP_BASEURL + '/games/gameID', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: await getData('token'),
                gameId: await getData('gameId')
            },
        })
            .then((response) => response.json())
    } catch (e) {
        console.log(e.message)
    }
}

const MakeMoveFetch = async (token, sign) => {
    try {
        return fetch(IP_BASEURL + '/games/update', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: token,
                gameId: await getData('gameId'),
                sign: sign
            },
        })
            .then((response) => response.json())
    } catch (e) {
        console.log(e.message)
    }
}


const GameBoardScreen = ({navigation}) => {

    const [player, setPlayer] = useState('');
    const [opponent, setOpponent] = useState('');
    const [oppMove, setOppMove] = useState('');
    const [playerMove, setPlayerMove] = useState('');
    const [result, setResult] = useState('');
    const [timer, setTimer] = useState(30);

    let time = 30;

    useEffect(() => {
        const interval = setInterval(async () => {
            await GameStatusFetch()
                .then(async (res) => {
                    if (res.playerOne.userId === await getData('token')) {
                        setOpponent(res.playerTwo.username);
                        setPlayer(res.playerOne.username);
                    }
                    if (res.playerTwo.userId === await getData('token')) {
                        setOpponent(res.playerOne.username);
                        setPlayer(res.playerTwo.username);
                    }

                    if (player !== "" && opponent !== "") {
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
                        navigation.navigate('Home')
                    }

                    if (res.playerMove && res.opponentMove) {
                        setResult(res.gameStatus);
                        if (res.playerOne.userId === await getData('token')) {
                            setOppMove(res.opponentMove);
                            setPlayerMove(res.playerMove);
                        } else {
                            setOppMove(res.playerMove);
                            setPlayerMove(res.opponentMove);
                        }
                        clearInterval(newInterval);
                    }
                })
            }, 1000)
        }
    }, [opponent]);

    const HandleMove = async (token, move) => {
        await MakeMoveFetch(token, move)
            .then(async () => console.log('Made move!!!'));
    };

    return (
        <ImageBackground
            style={{
                flex:1
            }}
            source={require('../../assets/Doom-background.webp')}>
            <View>
                <Header navigation={navigation}/>
                <View>
                    <TitleBox title={result ? oppMove : opponent}/>
                    <GameButton title={timer}/>
                    <View height={150}>

                    </View>
                    <View style={styles.cardBox}>
                        {result ? null :
                            <Card image={require('../../assets/Doom-chainsaw.webp')}
                                  handleMove={async () => {HandleMove(await getData('token'), 'rock')
                                  }}/>}

                        <Card image={require('../../assets/Doom-plasmagun.webp')}
                              handleMove={async () => {HandleMove(await getData('token'), 'paper')
                              }}/>

                        {result ? null :
                            <Card image={require('../../assets/massiveGun.webp')}
                                  handleMove={async () => {HandleMove(await getData('token'), 'scissors')
                                  }}/>}
                    </View>
                </View>
                <TitleBox title={result ? result : player}/>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    cardBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
    }
});

export default GameBoardScreen;

// ROCK = CHAINSAW
// PAPER = PLASMAGUN
// SCISSORS = MASSIVEGUN

// ROCK = MONSTER 1
// PAPER = MONSTER 2
// SCISSORS = MONSTER 3