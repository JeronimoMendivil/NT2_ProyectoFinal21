import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';


export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>About</Text>
      <Image source={require('../../assets/tusam6.jpg')} />
      <Text style={styles.description}>Tusam es un juego creado por los alumnos del terciario de ORT en la materia NT2.
       El juego consiste en Adivinar un numero en el menor numero de intentos posibles antes que se acabe el tiempo</Text>

      <Text style={styles.titulo}>Creadores</Text>

      <Text style={styles.description}>Jeronimo Mendivil - Jhon Carreño - Ezequiel Bikiel - Iñaki Barnetche</Text>

      <Button 
          title={'Go back'}
          onPress={()=>{navigation.goBack()}}
      />

      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: "black",
    margin: 10,
  },
  titulo: {
    fontSize: 22,
    textAlign: 'center',
    color: "black",
    margin: 10,
    textDecorationLine: "underline",
  }

});