import React from "react";
import {Text, StyleSheet, View } from "react-native";


const Resultado = ({ numTecho, numUser , numSecreto }) => {

    let resultado;

    if(numUser){
        if(numSecreto > numUser){
        resultado = 'Muy Bajo'
        }
        else if(numSecreto < numUser){
        resultado ='Muy Alto'
        }
        else{
        resultado ='Bravo, adivinaste!'
        }
}
    return (
        <View style= {styles.vista}>
            <Text style= {styles.text}>el numero secreto es {numSecreto}</Text>
            <Text style= {styles.text}>Adivina un numero entre 1 y {numTecho}</Text>
            <Text style= {styles.text}>{numUser} es {resultado}</Text>
        </View>         
    )
};

const styles = StyleSheet.create({
    text: {
        color: "#007688",
        fontSize: 24,
        alignSelf: "center",
        paddingBottom: 20,
    },
    
});

export default Resultado
