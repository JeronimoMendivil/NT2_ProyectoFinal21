import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import AppButton from "./AppButton";

const Jugando = ({ setNumUser, numUser, intentos, procesar }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setNumUser}
        defaultValue={numUser}
        placeholder="Comienza tu intento"
        keyboardType="numeric"
      />
      <AppButton title="Adivinar" onPress={procesar} />
      <Text style={styles.text}>Intentos: {intentos}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#808080",
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
/*     border: "0.5px gray solid",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", */
  },
  text: {
    color: "#007688",
    fontSize: 24,
    alignSelf: "center",
    paddingBottom: 20,
  },
});

export default Jugando
