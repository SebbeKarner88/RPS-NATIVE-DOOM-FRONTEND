import React from "react";
import {Text, TextInput, StyleSheet, View} from "react-native";

const InputField = ({title, keyType, value, setValue}) => {

    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder='input...'
                keyboardType={keyType}
                placeholderTextColor={'rgba(255,255,255,0.45)'}
                onChangeText={(value) => setValue(value)}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 20,
        color: '#60c5e5'
    },
    input: {
        margin: 10,
        padding: 4,
        fontSize: 20,
        color: '#fff',
        borderStyle: 'solid',
        borderColor: '#60c5e5',
        borderWidth: 1,
        borderRadius: 7,
        width: 200
    }
});

export default InputField;