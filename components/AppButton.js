import React from "react";
import {Text, StyleSheet, TouchableOpacity } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.5};


const AppButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.Container}>
            <Text style={styles.Text}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    Container: {
        elevation: 8,
        backgroundColor: "#007688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
    
      Text: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
});

export default AppButton;