import {View, StyleSheet} from 'react-native'
import Header from '../components/Header';
import {useState} from 'react'



function generateRandomNumber(min, max){ 
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if(randomNum === null){
        return generateRandomNumber(min, max);
    }else{
        return randomNum;
    }
}


function GameBoardCPUScreen(){
    const [CPUmove, setCPUMove] = generateRandomNumber(1, 4);
    const [playerMove, setPlayerMove] = useState('');
    const [result, setResult] = useState('');
    
    function botChoice (){
        if (CPUmove === 1){
            if (playerMove === 'ROCK'){
                setResult('DRAW');
            }
            if(playerMove === 'PAPER'){
                setResult('LOSE');
            }
            if(playerMove === 'SCISSORS'){
                setResult('WIN')
            }
            return require('../../assets/monster1.webp');
        }
        if(CPUmove === 2){
            if (playerMove === 'ROCK'){
                setResult('WIN')
            }
            if(playerMove === 'PAPER'){
                setResult('DRAW')
            }
            if(playerMove === 'SCISSORS'){
                setResult('LOSE')
            }
            return require('../../assets/monster2.webp');
        }
        if(CPUmove === 3){
            if(playerMove === 'ROCK'){
                setResult('LOSE');
            }
            if(playerMove === 'PAPER'){
                setResult('WIN');
            }
            if(playerMove === 'SCISSORS'){
                setResult('DRAW')
            }
            return require('../../assets/monster3.webp');
        }
    }

    const HandleResultMessage = (result) => {
        switch (result) {
            case 'WIN':
                return 'YOU WIN';
            case 'DRAW':
                return 'WOUNDED';
            case 'LOSE':
                return 'YOU DIED';
        }
    }
    
    return(
        <ImageBackground
            style={{
                flex: 1
            }}
            source={require('../../assets/Doom-background.webp')}>
                <View>
                <Header navigation={navigation}/>
                </View>



            </ImageBackground>
    )


}

export default GameBoardCPUScreen;

const styles = StyleSheet.create({
    cardBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
    },
})
