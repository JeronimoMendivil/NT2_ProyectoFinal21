import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const TextoTitulo = ({ text }) => {
  return <Text style={styles.textoTitulo}>{text}</Text>;
};

const styles = StyleSheet.create({
  textoTitulo: {
    fontSize: 34,
    color: "#007688",
    fontWeight: "bold",
    textTransform: "uppercase",
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default TextoTitulo
