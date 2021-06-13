import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Cronometro from '../../components/Cronometro';
import AppButton from "../../components/AppButton";
import vibrate from "../../utils/vibrate";

const numTecho = 100;
let idInterval;
let varMinutos = 5;
const minTosec = min => min * 60;

export default function Juego({ navigation, tiempoDeJuego }) {
  const [time, setTime] = useState(minTosec(varMinutos));
  const [jugando, setJugando] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [gano, setGano] = useState(false);

  const [numUser, setNumUser] = useState();
  const [numSecret, setNumSecret] = useState();
  const [mensaje, setMensaje] = useState("Adivina un numero entre 1 " + numSecret + " y " + numTecho);

  useEffect(() => {
    if (time == 0) {
      termino();
      setTime(minTosec(varMinutos))
      setMensaje("Se acabo el tiempo")
    }
  }, [time])

  const termino = () => {
    vibrate();
    setJugando(prev => !prev)
    clearInterval(idInterval)
  }

  const procesar = () => {
    let aux = intentos + 1;
    setIntentos(aux);
    if (numUser == numSecret) {
      setGano(true);
      termino();
      setMensaje("Felicidades adiviniste el numero en " + aux + " intentos");
    } 
    else if (numUser > numSecret) {
      setMensaje("Pénsa un número mas alto");
    }
    else{
      setMensaje("Pénsa un número mas bajo");
    }
  }

  const startGame = () => {
    clearInterval(idInterval);
    setTime(minTosec(varMinutos))
    let aux = Math.floor(Math.random() * numTecho) + 1;
    setNumSecret(aux);

    //#TODO: Limpiar input
    setGano(false);
    
    setIntentos(prev => 0)
    if (!jugando) {
      idInterval = setInterval(() => {
        setTime(prev => prev - 1)
      }, 1000);
    }
    setJugando(prev => !prev)
    setMensaje("Adivina un numero entre 1 " + aux + " y " + numTecho);
  }

  return (
    <View style={styles.container}>
      <Cronometro time={time} style={styles.center} />  
      <Text style={styles.text}><b>{mensaje}</b></Text>
      {/* #TODO: Componente Jugando */}
      {/* #TODO: Componente NoJugando */}
      { (jugando) ? 
        <TextInput
          style={styles.input}
          onChangeText={setNumUser}
          defaultValue={numUser}
          placeholder="Comienza tu intento"
          keyboardType="numeric"
        />
      : <></>}
      {(jugando) ? <AppButton title="Adivinar" onPress={procesar} /> : <AppButton title={(gano) ? "Volver a Jugar" : "Comenzar"} onPress={startGame} />}            
      {(jugando) ? <Text style={styles.text}>Intentos: {intentos}</Text> : (gano) ? <AppButton title="Ranking" /> : <></>}
      <StatusBar style='auto' />
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
  center: {
    alignSelf: 'center'
  },
  text: {
    color: "#007688",
    fontSize: 24,
    alignSelf: "center",
    paddingBottom: 20,
  },
});