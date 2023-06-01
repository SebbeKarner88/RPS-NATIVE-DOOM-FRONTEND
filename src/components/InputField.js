import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

const InputField = ({title, keyType, value, setValue, encrypted}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder='input...'
                keyboardType={keyType}
                secureTextEntry={encrypted}
                autoCapitalize='none'
                placeholderTextColor={'rgba(255,255,255,0.45)'}
                onChangeText={(value) => setValue(value)}
                value={value}
                keyboardAppearance='dark'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 22,
        fontFamily: 'EternalUiRegular',
        color: '#d20000',
    },
    input: {
        margin: 10,
        padding: 4,
        fontSize: 20,
        color: '#797979',
        borderStyle: 'solid',
        borderColor: '#d20000',
        borderWidth: 1,
        borderRadius: 7,
        width: 200,
    },
});

export default InputField;
