import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Cronometro from '../../components/Cronometro';
import EnPausa from '../../components/EnPausa';
import Jugando from '../../components/Jugando';
import vibrate from "../../utils/vibrate";

let idInterval;
const minTosec = min => min * 60;

export default function Juego({ route, navigation }) {
  const { tiempoDeJuego, numTecho } = route.params;
  console.log(tiempoDeJuego);
  const [time, setTime] = useState(minTosec(tiempoDeJuego));
  const [jugando, setJugando] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [gano, setGano] = useState(false);

  const [numUser, setNumUser] = useState();
  const [numSecret, setNumSecret] = useState();
  const [mensaje, setMensaje] = useState("Adivina un numero entre 1 y " + numTecho);

  useEffect(() => {
    if (time == 0) {
      termino();
      setTime(minTosec(tiempoDeJuego));
      setMensaje("Se acabo el tiempo");
    }
  }, [time])

  const termino = () => {
    vibrate();
    setJugando(prev => !prev);
    clearInterval(idInterval);
  }

  const procesar = () => {
    let aux = intentos + 1;
    setIntentos(aux); //Suma 1 intento
    if (numUser == numSecret) {
      //Si el numero intentado coincide
      setGano(true);
      termino(); 
      setMensaje("Felicidades adiviniste el numero en " + aux + " intentos");
    } 
    else if (numUser > numSecret) {
      //Si el numero del usuario es mayor
      setMensaje("Pénsa un número mas bajo");
    }
    else{
      //Si el numero del usuario es menor
      setMensaje("Pénsa un número mas alto");
    }
    setNumUser();//Limpia el input
  }

  const startGame = () => {
    clearInterval(idInterval); //Limpia el temporizador
    setTime(minTosec(tiempoDeJuego)); //Setea el temporizador segun la dificultad
    setNumSecret(Math.floor(Math.random() * numTecho) + 1); //Setea un numero
    setGano(false); //Setea Gano = false
    setIntentos(prev => 0); //Setea Intentos a 0
    setJugando(prev => !prev); //Setea Jugando a True
    setMensaje("Adivina un numero entre 1 y " + numTecho); //Setea el Mensaje


    //Inicia el cronometro
    idInterval = setInterval(() => {
      setTime(prev => prev - 1)
    }, 1000);
  }

  const mostrarJuego = () => {  
    if(jugando)
    {
      return <Jugando setNumUser={setNumUser} numUser={numUser} intentos={intentos} procesar={procesar} />;
    }
    else{
      return <EnPausa gano={gano} startGame={startGame} navigation={navigation} />;
    }
  }

  return (
    <View style={styles.container}>
      <Cronometro time={time} style={styles.center} />  
      <Text style={styles.text}>{mensaje}</Text>
      { mostrarJuego() }
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
  center: {
    alignSelf: 'center'
  },
  text: {
    textAlign: 'center',
    color: "#007688",
    fontSize: 22,
    fontWeight: "600",
    paddingBottom: 20,
  },
});