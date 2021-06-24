import React, { useState, useContext } from "react"
import { View, StyleSheet, Image, Text, TextInput, Button, TouchableOpacity } from "react-native"
import { StatusBar } from 'expo-status-bar'
import TextTitulo from "../../components/TextTitulo"

import * as Google from 'expo-google-app-auth'
import GlobalContext from "../../global/context"



export default function Home() {

  const [nombre, setNombre] = useState('')
  const [mail, setMail] = useState('')

  const { applyAuthentication } = useContext(GlobalContext)
  const { guardarInvitado } = useContext(GlobalContext)


  const loginInvitado = () => {
    guardarInvitado({nombre, mail})
    applyAuthentication()
  }

  async function signInwithGoogleAsync(){
    try {
      const config = {
        iosClientId: '640461910291-npdj3dkb2mrvru7117bo9bskagk90ml5.apps.googleusercontent.com',
        androidClientId :'542638054256-0oc13ertpur8u50ij7er0voou93tqtf6.apps.googleusercontent.com'
      }
      const result = await Google.logInAsync(config);
      //console.log(result);
      if (result.type === 'success' && result.user !== undefined) {
        applyAuthentication(result.user)
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  
  return (
  
    <View style={styles.container}>
      {/* #TODO: Agregar Nombre */}
      <Image 
          source={require('../../assets/tusam.jpg')}
        />
      <Text style={styles.description}>
        Ingrese, seleccione una dificultad e intente adivinar el numero en la menor cantidad de intentos antes que se acabe el tiempo.
      </Text>
      
      {/* #TODO: Agregar Introduccion, tal vez con instrucciones. */}
      {/* #TODO: Agregar Inicio con Google */}


      <TouchableOpacity
        style={styles.buttonGoogle}
        activeOpacity={0.5}
        onPress={() => {signInwithGoogleAsync()}}
      >
        <Image 
          style={styles.buttonImageIcon}
          source={require('../../assets/btn_google_signin.png')}
        />
      </TouchableOpacity> 

      <Button 
        title={'Entrar como invitado'}
        onPress={loginInvitado}
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
    fontSize: 18,
    textAlign: 'center',
    color: "black"
  },
  buttonGoogle:{
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    margin: 12
  },
  buttonImageIcon: {
    padding: 10,
    margin: 5,
    resizeMode: 'center',
  }
});