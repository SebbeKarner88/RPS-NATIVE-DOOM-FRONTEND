import React from 'react';
import {View, StyleSheet, Keyboard, TouchableWithoutFeedback} from "react-native";
import NavButton from "./NavButton";
import HeaderLogo from "./HeaderLogo";
import ModalPopup from "./ModalPopup";

const Header = ({navigation}) => {

    const modalText = `This App is created by: 

Sebastian Kärner, a student at EC Education in Stockholm, Sweden.
    
The App uses React Native/Js frontend with a Spring BOOT backend and a Postgres DB.

Created as part of a school assignment for our App-Development course.

Contact: 

Sebastian Kärner
Hyggesbacken 8
142 52 Skogas
Sweden
Tel: +46704740512
`

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View
                height={130}
                style={styles.container}>
                <HeaderLogo
                    style={styles.logo}
                    navigation={navigation} path={'Home'}/>

                <View
                    style={styles.navbar}>
                    <ModalPopup title={'About'} text={modalText}/>
                    <NavButton navigation={navigation} path={'Game'} label={'Game'}/>
                    <NavButton navigation={navigation} path={'Login'} label={'Login'}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'rgba(0,0,0,0.54)',
        borderBottomColor: 'rgba(190,190,190,0.24)',
        borderStyle: 'solid',
        borderBottomWidth: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navbar: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        maxWidth: 220,
        marginRight: 20,
        justifyContent: 'space-between',
    }
});

export default Header;