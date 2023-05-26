import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";

const PlayerCard = ({name, wins, draws, losses}) => {

    return (
            <View style={{alignItems: 'center'}}>
                <View style={styles.playerBox}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.results}>Personal Highscore</Text>
                    <Text style={styles.resultsWin}>Win: {wins}</Text>
                    <Text style={styles.resultsDraw}>Draw: {draws}</Text>
                    <Text style={styles.resultsLoss}>Loss: {losses}</Text>

                </View>
            </View>
    )
};

const styles = StyleSheet.create({
    playerBox: {
        backgroundColor: 'rgba(0,0,0,0.51)',
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
        shadowRadius: 2

    },
    title: {
        fontSize: 25,
        fontFamily: 'EternalBattleBold',
        color: '#a4a4a4',
        letterSpacing: 1.5

    },
    results: {
        fontFamily: 'EternalBattleBold',
        color: '#a4a4a4',
        letterSpacing: 1.5

    },
    resultsWin: {
        marginTop: 15,
        fontFamily: 'EternalBattleBold',
        color: '#3b9401',
        letterSpacing: 1.5
    },
    resultsDraw: {
        marginTop: 15,
        fontFamily: 'EternalBattleBold',
        color: '#aba402',
        letterSpacing: 1.5
    },
    resultsLoss: {
        marginTop: 15,
        fontFamily: 'EternalBattleBold',
        color: '#a10505',
        letterSpacing: 1.5
    }
});

export default PlayerCard;