import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Cronometro from '../../components/Cronometro';
import AppButton from "../../components/AppButton";


export default function Juego({ navigation }) {
    //#TODO: Cambiar para usar temporizador y no cronometro
    const [time, setTime] = useState(0); //#TODO: Depende del nivel seleccionado, se lo pasa por parametro?
    const [activeTimer, setActiveTimer] = useState(false);
    const [start, setStart] = useState(false);
    const [finished, setFinished] = useState(false);
    const [numUser, setNumUser] = useState(null);
    const [intentos, setIntentos] = useState(0);
    
    const numTecho = 100; //#TODO: Depende del nivel seleccionado, se lo pasa por parametro?
    //const numSecreto= Math.floor(Math.random() * numTecho) + 1;
    const numSecret = 50;

    const sumarIntento = () => setIntentos(intentos+1);

    let interval;

    const startGame = () => {
      //#TODO: Si le da al Boton Volver a Comenzar debe reiniciar el cronometro
      //#TODO: Setear numSecret
      //#TODO: Setear intentos a 0

      setStart(true);
      if (activeTimer) {
          clearInterval(interval)
      } else {
          interval = setInterval(() => {
              setTime(prev => prev + 1)
          }, 1000);
      }
      setActiveTimer(prev => !prev)
    }
    
    const procesar = () => {
      sumarIntento();
      if(numUser == numSecret){
        setFinished(true);
        //#TODO: Pausar cronometro
      }
      //#TODO: Si no es igual, mostrar mensaje de si es mayor o menor al numSecret.
    }
    
    return (
      <View style={styles.container}>
          <Cronometro time={time} />
          { (finished) ? "" : <Text style={styles.text}>Adivina un numero entre 1 y {numTecho}</Text> }
          {/* #TODO: Mostrar en el mensaje de abajo, el tiempo que tardo. */}
          { (finished) ? <Text style={styles.text}><b>Felicidades adiviniste el numero en {intentos} intentos.</b></Text> : "" }
          <TextInput
            style={styles.input}
            onChangeText={setNumUser}
            value={numUser}
            placeholder="Comienza tu intento"
            keyboardType="numeric"
          />
          {/* #TODO: Si ya gano, que aparezca el boton volver a jugar. */}
          {(start && !finished) ? <AppButton title="adivinar" onPress={procesar} /> : <AppButton title={finished ? "Volver a Jugar" : "Comenzar"} onPress={startGame} /> }
          {(finished) ? <AppButton title="Ranking" /> : ""}     
          <Text style={styles.text}>Intentos: {intentos}</Text>
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
  input: {
    height: 40,
    width: "100%",
    padding: 10,
    border: "0.5px gray solid",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
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