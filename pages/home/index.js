import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Esto es HOME</Text>
      <Button 
          title={'Go to About'}
          onPress={()=>{navigation.navigate('About')}}
      />
      <Button 
          title={'Go to Niveles'}
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

});