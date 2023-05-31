import React, { useState, useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from '../components/Header';
import DoomLogo from '../components/DoomLogo';
import { Audio } from 'expo-av';
import { getData, storeData } from '../../services/storage';
import { getToken } from '../../services/rpsApi';

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
