import React from 'react';
import {View, ImageBackground, Keyboard, TouchableWithoutFeedback} from "react-native";
import Header from "../components/Header";
import TitleBox from "../components/TitleBox";
import NameAgeBox from "../components/LoginBox";


const LoginScreen = ({navigation}) => {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ImageBackground
                style={{
                    flex:1
                }}
                source={require('../../assets/Doom-background.webp')}>
                <View>
                    <Header navigation={navigation}/>
                    <TitleBox title={'Login'}/>
                    <NameAgeBox/>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
};

export default LoginScreen;