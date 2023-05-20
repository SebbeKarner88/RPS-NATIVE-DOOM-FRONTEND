import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../components/Header';
import TitleBox from '../components/TitleBox';
import LoginBox from '../components/LoginBox';
import { getData } from '../screens/HomeScreen';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (getData('username') !== null) {
      const name = async () =>
        await getData('username').then((name) => setUsername(name));
      name();
    }
  }, [login]);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require('../../assets/Doom-background.webp')}
      >
        <View>
          <Header navigation={navigation} />
          {login ? (
            <TitleBox title={`Welcome ${username}`} />
          ) : (
            <TitleBox title={'Login'} />
          )}
          <LoginBox
            loggedIn={(username) => {
              setLogin(true);
              console.log(username);
            }}
          />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
