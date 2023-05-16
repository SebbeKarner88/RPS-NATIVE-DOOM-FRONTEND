import React from "react";
import {StyleSheet} from "react-native-web";
import {Dimensions, ImageBackground, View} from "react-native";
import Header from "../components/Header";

const GameBoardScreen = ({navigation}) => {
    return (
        <ImageBackground
            style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }}
            source={require('../../assets/background-grey.jpg')}>
            <View>
                <Header navigation={navigation}/>

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({

});

export default GameBoardScreen;