import React from 'react';
import {View, StyleSheet, Keyboard, TouchableWithoutFeedback} from "react-native";
import NavButton from "./NavButton";
import HeaderLogo from "./HeaderLogo";
import ModalPopup from "./ModalPopup";

const Header = ({navigation}) => {

    const modalText = 'About us text...'

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View
                height={100}
                style={styles.container}>
                <HeaderLogo navigation={navigation} path={'Home'}/>

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
        borderBottomColor: 'rgb(96,197,229)',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navbar: {
        flex: 1,
        flexDirection: 'row',
        maxWidth: 200,
        marginRight: 20,
        justifyContent: 'space-between',
    },
});

export default Header;