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
    margin: 12,
    borderWidth: 1,
  },
});

export default textInput;