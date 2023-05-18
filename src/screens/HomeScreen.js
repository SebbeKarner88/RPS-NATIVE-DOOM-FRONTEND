import React, {useEffect} from 'react';
import {Dimensions, ImageBackground, View} from "react-native";
import {useFonts} from "expo-font";
import Header from '../components/Header';
import ReactLogo from "../components/ReactLogo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import IP_BASEURL from "../../services/IP Config";


const getToken = async () => {
    try {
        const response = await fetch(IP_BASEURL + '/user/token');
        const json = await response.json();
        return json.toString();
    } catch (error) {
        console.error(error);
    }
};

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
            .then(() => console.log(key + ' : ' + value + ' saved.'))

    } catch (e) {
        console.log(e.message())
    }
}

export const getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch(e) {
        console.log(e.message())
    }
}

const HomeScreen = ({navigation}) => {

    const [loaded] = useFonts({
        EternalBattleBold: require('../../assets/fonts/EternalBattleBold.ttf'),
        EternalUiRegular: require('../../assets/fonts/EternalUiRegular.ttf')
    });



    useEffect(() => {
       getToken().then( token => {
           storeData('token', token)
               .then();
        })
    }, []);

if (loaded) {
    return (
        <ImageBackground
            style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }}
            source={require('../../assets/Doom-background.webp')}>
            <View>
                <Header navigation={navigation}/>
                <ReactLogo/>
            </View>
        </ImageBackground>
    )
}
else{
    return null;
}
};

export default HomeScreen;