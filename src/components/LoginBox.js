import React, { useState } from 'react';
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import InputField from './InputField';
import FuncButton from './FuncButton';
import { getData, storeData } from '../screens/HomeScreen';
import IP_BASEURL from '../../services/IP Config';
import Modal from './ModalPopup';

const LoginFetch = async (username, password) => {
  try {
    return fetch(IP_BASEURL + '/user/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => response.json());
  } catch (e) {
    console.error(e);
  }
};

const RegisterFetch = async (username, password) => {
  try {
    return fetch(IP_BASEURL + '/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: await getData('token'),
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => response.json());
  } catch (e) {
    console.error(e);
  }
};

const LoginBox = ({ loggedIn }) => {
  const [username, setUsername] = useState('');
  const [savedUsername, setSavedUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await LoginFetch(username, password)
      .then((res) => {
        if (res !== '') {
          storeData('token', res.token);
          storeData('username', res.username);
          setSavedUsername(res.username);
          setPassword('');
          setTimeout(() => setUsername(''), 1500);
        }
      })
      .then(() => {
        loggedIn(savedUsername);
      });
  };

  const handleRegister = async () => {
    await RegisterFetch(username, password).then((res) => {
      if (res === true) {
        setUsername('SUCCESS');
        setPassword('');
        setTimeout(() => setUsername(''), 1500);
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.inputBox}>
          <InputField
            title='Enter your Username'
            keyType={'text'}
            encrypted={false}
            value={username}
            setValue={setUsername}
          />
          <InputField
            title='Enter your password'
            keyType={'text'}
            encrypted={true}
            value={password}
            setValue={setPassword}
          />
          {username !== '' && password !== '' ? (
            <View style={{ alignItems: 'center' }}>
              <FuncButton label={'Login'} func={handleLogin} />
              <FuncButton label={'Register'} func={handleRegister} />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: 'rgba(0,0,0,0.53)',
    marginTop: 30,
    width: Dimensions.get('window').width - 50,
    height: 'auto',
    padding: 20,
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: '#d20000',
    borderWidth: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
});

export default LoginBox;
