import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Platform,
} from 'react-native';

const MonsterCard = ({image}) => {
    return (
        <TouchableOpacity>
            <View style={{alignItems: 'center'}}>
                <View style={styles.card}>
                    <Image resizeMode='cover' style={styles.image} source={image}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(0,0,0,0.51)',
        marginVertical: 40,
        marginHorizontal: 10,
        width: 180,
        height: 180,
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
        elevation: Platform.OS === 'android' ? 5 : null,
    },
    image: {
        flex: 1,
        height: 200,
        width: 140,
        overflow: 'visible',
        resizeMode: 'contain',
    },
});

export default MonsterCard;
