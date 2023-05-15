import React from 'react';
import {View, Dimensions, ImageBackground, StyleSheet, TouchableOpacity, Text} from "react-native";
import Header from "../components/Header";
import GameButton from "../components/GameButton";
import TitleBox from "../components/TitleBox";

const GameScreen = ({navigation}) => {

    const handleStartGame = () => {
        console.log('2p!')
    };


    return (
        <ImageBackground
            style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }}
            source={require('../../assets/background-grey.jpg')}>
            <View>

                <Header navigation={navigation}/>

                <TitleBox title={'Create Game'}/>

                <View style={styles.gameTypeBox}>
                    <TouchableOpacity disabled>
                        <GameButton title={'1 P'}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleStartGame()}>
                        <GameButton title={'2 P'}/>
                    </TouchableOpacity>
                </View>

                <TitleBox title={'Join Game'}/>

                <View style={{height: 300}}>
                    <Text>Här kommer vi mappa öppna spel!</Text>
                </View>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    gameTypeBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})


export default GameScreen;

