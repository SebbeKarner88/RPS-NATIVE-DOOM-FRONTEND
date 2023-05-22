import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen';
import GameScreen from "./src/screens/GameScreen";
import GameBoardScreen from "./src/screens/GameBoardScreen";
import HighScoreScreen from "./src/screens/HighScoreScreen";


const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Game: GameScreen,
        Login: LoginScreen,
        GameBoard: GameBoardScreen,
        HighScore: HighScoreScreen

    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
);

export default createAppContainer(navigator);
