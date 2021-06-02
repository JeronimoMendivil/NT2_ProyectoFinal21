import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';


export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Esto es ABOUT</Text>

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

});