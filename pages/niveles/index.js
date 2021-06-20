import React, { useContext } from "react";
import { View, StyleSheet} from "react-native";
import { StatusBar } from 'expo-status-bar';
import AppButton from '../../components/AppButton';
import TextTitulo from "../../components/TextTitulo";

import GlobalContext from "../../global/context"


const nivelFacil = 2;
const nivelNormal = 1;
const nivelDificil = 0.5;

export default function Niveles({navigation}) {

const {applyLogout} = useContext(GlobalContext)


  return (
    <View style={styles.container}>

        <TextTitulo text={"elige el nivel"} />
        <AppButton title="fácil" 
          onPress={()=>{navigation.navigate('Juego', { tiempoDeJuego: 2, numTecho: 100 })}} //2 Minutos entre 1 y 100
        />
        <AppButton title="normal" 
          onPress={()=>{navigation.navigate('Juego', { tiempoDeJuego: 1, numTecho: 250 })}} // 1 Minuto entre 1 y 250
        />
        <AppButton title="difícil" 
          onPress={()=>{navigation.navigate('Juego', { tiempoDeJuego: 0.5, numTecho: 500 })}} // 1/2 Minuto entre 1 y 500
        />
        <AppButton title="ranking" 
          onPress={()=>{navigation.navigate('Ranking')}}
        />
        {/* PROVISORIO */}
        <AppButton title="loguot" 
                  onPress={applyLogout}
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

  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    alignSelf: "flex-end",
  },


});