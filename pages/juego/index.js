import React, {useState} from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Cronometro from '../../components/Cronometro';
import Resultado from '../../components/Resultado';
import InputNumero from "../../components/InputNumero";
import AppButton from "../../components/AppButton";


const numTecho = 100;
const numUser = 50;
const numSecreto= Math.floor(Math.random() * numTecho) + 1;
const cantIntentos = 0; //o en 1 probar



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
            <InputNumero />
            <AppButton title="adivinar"/>
            <Text style={styles.text}>intentos:{cantIntentos}</Text>
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

  text: {
    color: "#007688",
    fontSize: 24,
    alignSelf: "center",
    paddingBottom: 20,
},


});