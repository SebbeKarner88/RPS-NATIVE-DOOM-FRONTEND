import React from "react";
import {Dimensions, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

const RecentGamesTitle = ({title}) => {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{alignItems: 'center'}}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    titleBox: {
        backgroundColor: 'rgba(0,0,0,0.51)',
        margin: 15,
        width: Dimensions.get('window').width - 40,
        height: 'auto',
        padding: 10,
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
        shadowRadius: 2

    },
    title: {
        fontSize: 20,
        fontFamily: 'EternalBattleBold',
        color: '#a4a4a4',
        letterSpacing: 1.5

    }
});

export default RecentGamesTitle;