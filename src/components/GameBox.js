import React from "react";
import {
    Dimensions,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View,
} from "react-native";

const GameBox = ({opponent, joinGame}) => {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{alignItems: 'center'}}>
                <View style={styles.gameBox}>
                    <Text style={styles.opponent}>{opponent}</Text>
                    <TouchableOpacity onPress={joinGame}>
                        <Text
                            style={styles.button}>
                            Join
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    gameBox: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.51)',
        marginTop: 30,
        width: Dimensions.get('window').width - 200,
        height: 110,
        padding: 5,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: '#a20000',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.9,
        shadowRadius: 2
    },
    opponent: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#a20000',
    },
    gameCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        margin: 5,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#a20000",
        fontSize: 20,
        fontWeight: 'bold',
        color: '#a20000',
        padding: 5
    }
});

export default GameBox;