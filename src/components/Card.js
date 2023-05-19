import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";

const Card = ({image, handleMove, style}) => {

    return (
        <TouchableOpacity onPress={handleMove}>
            <View style={{alignItems: 'center'}}>
                <View style={styles.card}>
                    <Image resizeMode="cover" style={styles.image} source={image}/>
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
        padding: 5,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: '#d20000',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation:5,

    },
    title: {
        fontSize: 10,
        fontFamily: 'EternalUiRegular',
        color: '#d20000',
        letterSpacing: 1.5

    },
    image: {
        flex:1,
        transform: [{rotate: '90deg'}],
        height: 200,
        width:140,
        overflow: 'visible',
        resizeMode: 'contain'    
    }
});

export default Card;