import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Cronometro from './components/Cronometro';
import Separador  from './components/Separador';
import AppButton  from './components/Button';


const App = () => {
  return (
    <View style={styles.container}>


      <Text style={styles.textoTitulo}>elige el nivel</Text>
      <Separador/>
      <Separador/>

      
      <AppButton title="fácil" />
      <Separador/>

      <AppButton title="normal" />
      <Separador/>

      <AppButton title="difícil" />
      <Separador/>

      <AppButton title="ranking" />
      <Separador/>

      <Cronometro/>
      
      <StatusBar style="auto" />
    </View>
  );
};

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
    alignSelf: "center",
    textTransform: "uppercase"
  },
  


});

export default App;