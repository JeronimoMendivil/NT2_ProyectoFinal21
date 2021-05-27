import React from "react";
import {Text, StyleSheet, TouchableOpacity } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.5};


const AppButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#007688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
    
      appButtonText: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
});

export default AppButton;