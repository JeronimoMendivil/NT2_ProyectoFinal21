import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import AsyncStorage from "../../utils/asyncStorage"
import TextTitulo from "../../components/TextTitulo";
import contacts from "./contacts";

export default function Ranking({ navigation }) {
  
  const [puntajes, setPuntajes] = useState([])

  const cargarPuntajes = async () => {
    let aux = await AsyncStorage.getData("puntajes");
    setPuntajes(aux)
  }

  useEffect(() => {
    cargarPuntajes();
  }, [])
  


  return (
    <View style={styles.container}>
      <TextTitulo text={"ranking"} />
      <ScrollView>
        <View>
          <View style={styles.row}>
            <Text style={styles.text} >Nombre</Text>
            <Text style={styles.text} >Dificultad</Text>
            <Text style={styles.text} >Intentos</Text>
            <Text style={styles.text} >Tiempo</Text>
          </View>
        {(puntajes) ? puntajes.map((puntaje, index) => (
          <View style={styles.row} key={index} >
            <Text style={styles.text} >{puntaje.nombre}</Text>
            <Text style={styles.text} >{puntaje.dificultad}</Text>
            <Text style={styles.text} >{puntaje.intentos}</Text>
            <Text style={styles.text} >{puntaje.tiempo}</Text>
          </View>
        )) : <>No hay Puntajes</>}
          
        </View>
      </ScrollView>
      <Button
        title={"Go back"}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    padding: 8,
  },
  text: {
    flex: 2,
    fontSize: 16,
    padding: 5,

  },
});
