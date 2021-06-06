import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import TextTitulo from "../../components/TextTitulo";




export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* #TODO: Agregar Nombre */}
      <TextTitulo text={"hola!!!"} />
      
      {/* #TODO: Agregar Introduccion, tal vez con instrucciones. */}
      {/*
      <Button 
          title={'Go to About'}
          onPress={()=>{navigation.navigate('About')}}
      />
      <Button 
          title={'Go to Niveles'}
          onPress={()=>{navigation.navigate('Niveles')}}
      />
      */}
      {/* #TODO: Agregar Inicio con Google */}
      <Button 
        style={styles.google}
        title={'Sign Up with Google'}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <Button 
        title={'Entrar como invitado'}
        onPress={()=>{navigation.navigate('Niveles')}}
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
  titulo: {
    fontSize: 25,
    fontWeight: 600,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    padding: 10,
    border: "0.5px gray solid",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
});