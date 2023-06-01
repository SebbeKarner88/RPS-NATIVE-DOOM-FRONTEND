import React from "react";
import {StyleSheet, Text, View} from "react-native";

const GameButton = ({title}) => {

    return (
        <View style={{alignItems: 'center'}}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    titleBox: {
        backgroundColor: 'rgba(0,0,0,0.51)',
        marginTop: 30,
        width: 100,
        height: 'auto',
        padding: 20,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: '#04a40c',
        borderWidth: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.9,
        shadowRadius: 2

    },
    title: {
        fontSize: 20,
        fontFamily: 'EternalBattleBold',
        color: '#04a40c',
        letterSpacing: 1.5
    }
});

export default GameButton;