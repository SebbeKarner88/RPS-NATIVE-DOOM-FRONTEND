import React from "react";
import {Image, View, StyleSheet, Dimensions} from "react-native";

const DoomLogo = () => {

    return (
        <View style={{alignItems: 'center'}}>
            <Image
                style={[styles.image, styles.shadow]}
                source={require('../../assets/Doom-logo-big.png')}
            />
            <View height={Dimensions.get('window').height * 0.25}></View>
            <Image
                style={[styles.shadow, styles.logo]}
                source={require('../../assets/RPS-logo-grey.png')}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        marginTop: 20,
        overflow: 'visible',
        height: 220,
        width: 300
    },
    text: {
        marginTop: 25,
        fontSize: 65,
        fontFamily: 'EternalBattleBold',
        color: 'rgba(255,255,255,0.89)'
    },
    logo: {
      height: 90,
        width: 120,
        overflow: "visible"
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 1,
        shadowRadius: 1,

    }
});

export default DoomLogo;