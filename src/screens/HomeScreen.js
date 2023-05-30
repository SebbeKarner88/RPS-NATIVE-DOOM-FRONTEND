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

const HomeScreen = ({ navigation }) => {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/music/AtDoomsGate.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
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
          storeData('token', token);
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
