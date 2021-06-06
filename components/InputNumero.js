import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const textInput = () => {
  const [numbero, onChangeNumber] = React.useState(null);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={numbero}
        placeholder="Comienza tu intento"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    padding: 10,
    border: "0.5px gray solid",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
});

export default textInput;