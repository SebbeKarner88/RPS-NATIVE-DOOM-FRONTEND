import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

const Card = ({title, handleMove}) => {

    return (
        <TouchableOpacity onPress={handleMove}>
            <View style={{alignItems: 'center'}}>
                <View style={styles.card}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(0,0,0,0.51)',
        marginVertical: 60,
        marginHorizontal:10,
        width: 90,
        height: 150,
        padding: 20,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: '#60c5e5',
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
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#60c5e5',
        letterSpacing: 1.5

    }
});

export default Card;