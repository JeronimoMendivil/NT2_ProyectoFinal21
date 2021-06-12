import React from "react";
import {Text, StyleSheet, View } from "react-native";


const Cronometro = (props) => {

    const mins = parseInt(props.time / 60)
    const secs = props.time % 60
    const paddZero = value => value < 10 ? '0' : ''
    
    return (
        <View style= {styles.vista}>
            <Text style= {styles.text}>{paddZero(mins)}{mins}:{paddZero(secs)}{secs}</Text>           
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        padding: 10,
        alignSelf: "center",
    },
    vista:{
        //alignSelf: "flex-end",
        justifyContent: 'center',
    }
});

export default Cronometro;