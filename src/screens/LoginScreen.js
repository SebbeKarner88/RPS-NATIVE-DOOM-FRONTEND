import React from 'react';
import {
    View,
    ImageBackground,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';
import Header from '../components/Header';
import TitleBox from '../components/TitleBox';
import LoginBox from '../components/LoginBox';
import {NavigationActions} from 'react-navigation';

const LoginScreen = ({navigation}) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ImageBackground
                style={{
                    flex: 1,
                }}
                source={require('../../assets/Doom-background.webp')}
            >
                <View>
                    <Header navigation={navigation}/>
                    <TitleBox title={'Login'}/>
                    <LoginBox
                        loggedIn={() => {
                            navigation.reset(
                                [NavigationActions.navigate({routeName: 'UserPage'})],
                                0
                            );
                        }}
                    />
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
};

export default LoginScreen;
