import React, {useEffect} from 'react';
import {Dimensions, ImageBackground, View} from "react-native";
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
        const res = await AsyncStorage.getItem(key);
        return res;
    } catch(e) {
        console.log(e.message())
    }
}

const HomeScreen = ({navigation}) => {


    useEffect(() => {
       getToken().then( token => {
           storeData('token', token)
               .then();
        })
    }, []);


    return (
        <ImageBackground
            style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }}
            source={require('../../assets/background-grey.jpg')}>
            <View>
                <Header navigation={navigation}/>
                <ReactLogo/>
            </View>
        </ImageBackground>
    )
};

export default HomeScreen;