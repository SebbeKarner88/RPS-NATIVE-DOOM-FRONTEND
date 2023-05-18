import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";

const FuncButton = ({label, func}) => {

    return <TouchableOpacity
        onPress={func}>
        <Text
            style={styles.button}>
            {label}
        </Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        margin: 15,
        fontSize: 22,
        fontFamily: 'EternalBattleBold',
        color: '#d20000',
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 1
    }
});

export default FuncButton;