import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Cronometro from '../../components/Cronometro';
import AppButton from "../../components/AppButton";
import vibrate from "../../utils/vibrate";

const numTecho = 100;
const numSecret = 50;
let idInterval;
let varSegundos = 0.1;
const minTosec = min => min * 60;

export default function Juego({ navigation, tiempoDeJuego }) {

  const [time, setTime] = useState(minTosec(varSegundos));
  const [activeTimer, setActiveTimer] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [finished, setFinished] = useState(false);

  const [numUser, setNumUser] = useState(null);

  useEffect(() => {
    if (time == 0) {
      vibrate();
      setActiveTimer(prev => !prev)
      clearInterval(idInterval)
      setTime(minTosec(varSegundos))
      setFinished(prev => !prev)
    }
  }, [time])

  const sumarIntento = () => setIntentos(intentos + 1);

  const procesar = () => {
    sumarIntento();
    if (numUser == numSecret) {
      setFinished(true);
      //#TODO: Pausar cronometro
    }
    //#TODO: Si no es igual, mostrar mensaje de si es mayor o menor al numSecret.
  }

  const onToggleButton = () => {
    setIntentos(prev => 0)
    if (!activeTimer) {
      idInterval = setInterval(() => {
        setTime(prev => prev - 1)
      }, 1000);
    }
    setActiveTimer(prev => !prev)
  }

  return (

    <View style={styles.container}>

      {/* {
      (finished) ? 
        <Text style={styles.text}><b>Felicidades adiviniste el numero en {intentos} intentos.</b></Text> : ""
      } */}

      {
        (!activeTimer) ?
          <>
            <Text style={styles.text}>
              {
                (!finished) ?
                  <>Al comenzar deberas adivinar un numero entre 1 y {numTecho}. ¿Serás capaz de adivinarlo?</>
                  :
                  <>Perdiste Dar comenzar para volver a intentarlo</>
              }
            </Text>
            <AppButton title="Comenzar" onPress={onToggleButton} />
          </>
          :
          <>
            <Cronometro time={time} style={styles.center} />
            <Text style={styles.text}>Acabo de pensar el número esta entre 1 y {numTecho}.</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNumUser}
              value={numUser}
              placeholder="Comienza tu intento"
              keyboardType="numeric"
            />
            <AppButton title="adivinar" onPress={procesar} />
            <Text style={styles.text}>Intentos: {intentos}</Text>
          </>
      }

      {/* {(finished) ? <AppButton title="Ranking" /> : ""} */}

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