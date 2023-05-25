import React, { useState, useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from '../components/Header';
import DoomLogo from '../components/DoomLogo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IP_BASEURL from '../../services/IP Config';
import { Audio } from 'expo-av';

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
    await AsyncStorage.setItem(key, value).then(() =>
      console.log(key + ' : ' + value + ' saved.')
    );
  } catch (e) {
    console.log(e.message());
  }
};

export const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e.message());
  }
};

export const removeData = async (key) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e.message());
  }
};

const HomeScreen = ({ navigation }) => {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/music/AtDoomsGate.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound;
        }
      : undefined;
  }, [sound]);

  const [loaded] = useFonts({
    EternalBattleBold: require('../../assets/fonts/EternalBattleBold.ttf'),
    EternalUiRegular: require('../../assets/fonts/EternalUiRegular.ttf'),
  });

  useEffect(() => {
    playSound();
    getData('token').then((data) => {
      if (!data) {
        getToken().then((token) => {
          storeData('token', token).then();
        });
      }
    });
  }, []);

  if (loaded) {
    return (
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require('../../assets/Doom-background.webp')}
      >
        <View>
          <Header navigation={navigation} />
          <DoomLogo />
        </View>
      </ImageBackground>
    );
  } else {
    return null;
  }
};

export default HomeScreen;
