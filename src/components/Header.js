import React from 'react';
import {View, StyleSheet, Keyboard, TouchableWithoutFeedback} from "react-native";
import NavButton from "./NavButton";
import HeaderLogo from "./HeaderLogo";
import ModalPopup from "./ModalPopup";

const Header = ({navigation}) => {

    const modalText = ` Beepity Baapity Group is a company that does magic with code.
     The company has three people at this time in different places in Sweden.
    Our motto is "How hard can it be, it's just beepity baapity". 

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
        borderBottomWidth: 2,
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