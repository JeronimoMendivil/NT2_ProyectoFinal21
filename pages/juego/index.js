import React, {useState} from "react";
import { View, StyleSheet, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Cronometro from '../../components/Cronometro';
import Resultado from '../../components/Resultado';


const numTecho = 100;
const numUser = 50;
const numSecreto= Math.floor(Math.random() * numTecho) + 1;



export default function Juego({ navigation }) {

    const [time, setTime] = useState(0);
    const [activeTimer, setActiveTimer] = useState(false);

    let interval;

    const onToggleButton = () => {
        if (activeTimer) {
            clearInterval(interval)
        } else {
            interval = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000);
        }
        setActiveTimer(prev => !prev)
    }

    const restart = () => {
      clearInterval(interval)
      setActiveTimer(false)
      setTime(0)
    }


      return (
        <View style={styles.container}>
            <Cronometro time={time} />
            <View style= {styles.buttonContainer}>
                <Button title={(activeTimer) ? 'Pausar' : 'Iniciar'} onPress={onToggleButton}  />
                <Button title={'Reiniciar'} onPress={restart} />
            </View>
            <Resultado numUser={numUser} numSecreto={numSecreto} numTecho={numTecho}/>
            <StatusBar style='auto'/>
        </View>

        
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },

  textoTitulo: {
    fontSize: 34,
    color: "#007688",
    fontWeight: "bold",
    textTransform: "uppercase",
    alignSelf: "center",
    marginBottom: 50,
  },

  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    alignSelf: "flex-end",
  },


});