import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import AppButton from '../../components/AppButton';

export default function Niveles({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.textoTitulo}>elige el nivel</Text>  
        <AppButton title="fácil" 
                  onPress={()=>{navigation.navigate('Juego')}} //2 Minutos entre 1 y 100
        />
        <AppButton title="normal" 
                  onPress={()=>{navigation.navigate('Juego')}} // 1 Minuto entre 1 y 250
        />
        <AppButton title="difícil" 
                  onPress={()=>{navigation.navigate('Juego')}} // 1/2 Minuto entre 1 y 500
        />
        <AppButton title="ranking" 
                  onPress={()=>{navigation.navigate('Ranking')}}
        />

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