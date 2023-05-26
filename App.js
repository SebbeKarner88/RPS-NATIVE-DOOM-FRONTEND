import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import GameScreen from './src/screens/GameScreen';
import GameBoardScreen from './src/screens/GameBoardScreen';
import GameBoardCPU from './src/screens/GameBoardCPUScreen';
import UserpageScreen from './src/screens/UserpageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    Login: LoginScreen,
    GameBoard: GameBoardScreen,
    GameBoardCPU: GameBoardCPU,
    UserPage: UserpageScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
