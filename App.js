import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen';
import GameScreen from "./src/screens/GameScreen";
import GameBoardScreen from "./src/screens/GameBoardScreen";


const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Game: GameScreen,
        Login: LoginScreen,
        GameBoard: GameBoardScreen

    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "Rock Paper Scissors",
            headerStyle: {
                backgroundColor: "rgb(0,0,0)",
            },
            headerTitleStyle: {
                fontSize: 25,
                color: "#71c6e1",
                fontWeight: "bold",
            },
        },
    }
);

export default createAppContainer(navigator);
