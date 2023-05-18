import React from "react";
import {Image, TouchableOpacity, StyleSheet, View} from "react-native";

const HeaderLogo = ({navigation, path}) => {

    return <TouchableOpacity
        onPress={() => navigation.navigate(`${path}`)}>
        <View
            height={90}
            width={90}
            style={styles.logo}>
            <Image
                style={styles.logoPic}
                source={require('../../assets/Doom-icon.png')}
            />
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    logo: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1

    },
    logoPic: {
        height: 85,
        width: 85
    }
});

export default HeaderLogo;