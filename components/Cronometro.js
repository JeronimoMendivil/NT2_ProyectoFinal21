import React from "react";
import {Text, StyleSheet, View } from "react-native";


const Cronometro = (props) => {
    return (
        <View sytle= {styles.vista}>
            <Text style= {styles.text}>00:00</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: "flex-end",
    },

    vista:{
        padding: 50,
        justifyContent: 'center',
    },
    
});


export default Cronometro;