import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";

const ReactLogo = () => {

    return (
        <View style={{alignItems: 'center'}}>
            <Image
                style={[styles.image, styles.shadow]}
                source={require('../../assets/pngaaa.com-3691859.png')}
            />
            <Text style={[styles.text, styles.shadow]}>React Native</Text>
            <Text style={[styles.text, styles.shadow]}>Rock Paper Scissors</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        marginTop: 120,
        overflow: 'visible',
        height: 272,
        width: 305
    },
    text: {
        marginTop: 25,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5fc4e4'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 1
    }
});

export default ReactLogo;