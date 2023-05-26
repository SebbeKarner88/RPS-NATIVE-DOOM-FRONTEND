import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const ModalPopup = ({ title, text, color }) => {
  const [modal, setModal] = useState(false);
  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(!modal)}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setModal(!modal);
          }}
        >
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={[styles.modView, styles.shadow]}>
                <Text style={styles.modText}>{text}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity>
        <Text
          style={[styles.Button, styles.shadow, {color: color}]}
          onPress={() => setModal(true)}
        >
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
    padding: 25,
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: '#d20000',
    borderWidth: 2,
  },
  Button: {
    fontSize: 16,
    fontFamily: 'EternalBattleBold',
    textAlign: 'center',
  },
  modText: {
    textAlign: 'left',
    color: '#9d9d9d',
    fontFamily: 'EternalUiRegular',
    fontSize: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1,
  },
});

export default ModalPopup;
