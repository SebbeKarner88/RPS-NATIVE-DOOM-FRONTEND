import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';

const ModalPopup = ({title, text}) => {
    const [modal, setModal] = useState(false);
    return (
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modal}
                onRequestClose={() => setModal(!modal)}>
                <View style={styles.centeredView}>
                    <View style={[styles.modView, styles.shadow]}>
                        <Text style={styles.modText}>
                            {text}
                        </Text>
                        <TouchableOpacity
                            onPress={() => setModal(!modal)}>
                            <Text
                                style={[styles.Button]}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity>
                <Text
                    style={[styles.Button, styles.shadow]}
                    onPress={() => setModal(true)}>
                    {title}
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modView: {
        backgroundColor: 'rgba(0,0,0,0.73)',
        marginTop: 30,
        width: Dimensions.get('window').width - 50,
        height: 'auto',
        padding: 20,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: '#60c5e5',
        borderWidth: 2
    },
    Button: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5fc4e4',
        textAlign: 'center'
    },
    modText: {
        marginBottom: 15,
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 1
    }
});

export default ModalPopup;