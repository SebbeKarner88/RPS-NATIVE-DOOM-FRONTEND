import { View, ImageBackground, StyleSheet } from 'react-native'
import Header from '../components/Header';


const UserpageScreen = ({navigation}) => {

    return(
        
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require('../../assets/Doom-background.webp')}
    >
    <View>
        <Header navigation={navigation} />
    </View>

    </ImageBackground>
        
        

    )
}


export default UserpageScreen;

const styles = StyleSheet.create({

})