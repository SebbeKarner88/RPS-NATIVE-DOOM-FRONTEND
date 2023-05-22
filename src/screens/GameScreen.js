import React, {useEffect, useState} from 'react';
import {View, ImageBackground, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import Header from "../components/Header";
import GameButton from "../components/GameButton";
import TitleBox from "../components/TitleBox";
import {getData, storeData} from "./HomeScreen";
import GameBox from "../components/GameBox";
import RefreshButton from "../components/RefreshButton";
import IP_BASEURL from "../../services/IP Config";
import ModalPopup from '../components/ModalPopup';

const ruleText = `THE DOOM IS NEAR... 

It's time to step up the game and kill some monsters. 

Your weapon of choice is critical for your faith:

    Chainsaw kills Mancubus 
    Plasmagun kills Arche-vile
    Gatling gun kills Cacodemon
    
    Good luck and have fun!
`

const JoinGameFetch = async (gameId) => {
    try {
        return fetch(IP_BASEURL + '/games/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: await getData('token'),
                gameId: gameId,
            },
        })
            .then((response) => response.json())
    }catch (e) {
        console.log(e.message)
    }
}

const CreateGameFetch = async () => {
    try {
        return fetch(IP_BASEURL + '/games/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: await getData('token'),
            },
        })
            .then((response) => response.json())
    }catch (e) {
    }
}

const OpenGamesFetch = async () => {
    try {
        return fetch(IP_BASEURL + '/games', {
            method: "GET",
        })
            .then((response) => response.json())
    }catch (e) {
    }
}

const GameScreen = ({navigation}) => {

    const [refreshGames, setRefreshGames] = useState(false);
    const [openGames, setOpenGames] = useState([]);

    const handleStartGame = async () => {
        await CreateGameFetch()
            .then( (res) => {
                storeData('gameId', res.gameStatusId);
                navigation.navigate('GameBoard');
            })
    };

    const handleJoin = async (gameId) => {
        await JoinGameFetch(gameId)
            .then(() => {
                storeData('gameId',gameId);
                navigation.navigate('GameBoard');
            });
    };

    useEffect(() => {
         OpenGamesFetch()
            .then((game) => {
                setOpenGames(game);
            })
            .catch((err) => console.log(err.message))
    }, [refreshGames]);


    return (
        <ImageBackground
            style={{
                flex:1
            }}
            source={require('../../assets/Doom-background.webp')}>
            <View>

                <Header navigation={navigation}/>

                <TitleBox title={'Create Game'}/>

                <View style={styles.gameTypeBox}>
                    <TouchableOpacity disabled>
                        <GameButton title={'1 P'}/>
                    </TouchableOpacity>
                    <ModalPopup title={'Rules'} text={ruleText}/>
                    <TouchableOpacity onPress={() => handleStartGame()}>
                        <GameButton title={'2 P'}/>
                    </TouchableOpacity>
                </View>

                <TitleBox title={'Join Game'}/>
                <TouchableOpacity onPress={() => setRefreshGames(!refreshGames)}>
                    <RefreshButton title={'Refresh'}/>
                </TouchableOpacity>

                <View style={{height: 300}}>

                    <FlatList
                        data={openGames}
                        keyExtractor={item => item.gameStatusId}
                        renderItem={({item}) =>
                            <GameBox opponent={item.playerOne.username} joinGame={() => handleJoin(item.gameStatusId)}/>
                    }/>
                </View>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    gameTypeBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})


export default GameScreen;

