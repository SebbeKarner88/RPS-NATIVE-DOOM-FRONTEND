import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../components/Header';
import { removeData } from './HomeScreen';

const UserpageScreen = ({ navigation }) => {
  const handleLogout = () => {
    removeData('username');
    navigation.navigate('Home');
  };
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require('../../assets/Doom-background.webp')}
    >
      <View>
        <Header navigation={navigation} />
      </View>
      <View>
        <TouchableWithoutFeedback onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
};

export default UserpageScreen;

const styles = StyleSheet.create({});
