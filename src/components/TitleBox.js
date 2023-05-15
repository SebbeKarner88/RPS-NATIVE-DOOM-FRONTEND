import React from "react";
import {Dimensions, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

const TitleBox = ({title}) => {

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
        marginTop: 30,
        width: Dimensions.get('window').width - 50,
        height: 'auto',
        padding: 20,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: '#60c5e5',
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
        fontSize: 30,
        fontWeight: 'bold',
        color: '#60c5e5',
        letterSpacing: 1.5

    }
});

export default TitleBox;