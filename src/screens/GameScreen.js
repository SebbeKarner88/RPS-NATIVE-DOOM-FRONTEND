import React, {useEffect, useState} from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import Header from '../components/Header';
import GameButton from '../components/GameButton';
import TitleBox from '../components/TitleBox';
import {storeData} from '../../services/storage';
import GameBox from '../components/GameBox';
import RefreshButton from '../components/RefreshButton';
import ModalPopup from '../components/ModalPopup';
import {
    CreateGameFetch,
    OpenGamesFetch,
    JoinGameFetch,
} from '../../services/rpsApi';

const ruleText = `THE DOOM IS NEAR... 

It's time to step up the game and kill some monsters. 

Your weapon of choice is critical for your faith:

    Chainsaw kills Mancubus 
    Plasmagun kills Arche-vile
    Gatling gun kills Cacodemon
    
    Good luck and have fun!
`;

const GameScreen = ({navigation}) => {
    const [refreshGames, setRefreshGames] = useState(false);
    const [openGames, setOpenGames] = useState([]);

    const handleStartGame = () => {
        CreateGameFetch().then((res) => {
            storeData('gameId', res.gameStatusId);
            navigation.navigate('GameBoard');
        });
    };

    const handleJoin = async (gameId) => {
        await JoinGameFetch(gameId).then(() => {
            storeData('gameId', gameId);
            navigation.navigate('GameBoard');
        });
    };

    useEffect(() => {
        OpenGamesFetch()
            .then((game) => {
                setOpenGames(game);
            })
            .catch((err) => console.log(err.message));
    }, [refreshGames]);

    return (
        <ImageBackground
            style={{
                flex: 1,
            }}
            source={require('../../assets/Doom-background.webp')}
        >
            <View>
                <Header navigation={navigation}/>

                <TitleBox title={'Create Game'}/>

                <View style={styles.gameTypeBox}>
                    <TouchableOpacity onPress={() => navigation.navigate('GameBoardCPU')}>
                        <GameButton title={'1 P'}/>
                    </TouchableOpacity>
                    <ModalPopup title={'Rules'} text={ruleText} color={'#c4c4c4'}/>
                    <TouchableOpacity onPress={() => handleStartGame()}>
                        <GameButton title={'2 P'}/>
                    </TouchableOpacity>
                </View>

                <TitleBox title={'Join Game'}/>
                <TouchableOpacity onPress={() => setRefreshGames(!refreshGames)}>
                    <RefreshButton title={'Refresh'}/>
                </TouchableOpacity>

                <View style={{height: 300}}>
                    <FlatList
                        data={openGames}
                        keyExtractor={(item) => item.gameStatusId}
                        renderItem={({item}) => (
                            <GameBox
                                opponent={item.playerOne.username}
                                joinGame={() => handleJoin(item.gameStatusId)}
                            />
                        )}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    gameTypeBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

export default GameScreen;
