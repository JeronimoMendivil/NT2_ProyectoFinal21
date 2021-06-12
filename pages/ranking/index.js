import React from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import TextTitulo from "../../components/TextTitulo";
import contacts from "./contacts";

export default function Ranking({ navigation }) {
  return (
    <View style={styles.container}>
      <TextTitulo text={"ranking"} />
      <ScrollView>
        <View>
        {contacts.map((contact, index) => (
          <View style={styles.row} key={index} >
            <Text style={styles.text} >{contact.nombre}</Text>
            <Text style={styles.text} >{contact.telefono}</Text>
          </View>
        ))}
          
        </View>
      </ScrollView>
      <Button
        title={"Go back"}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    padding: 8,
  },
  text: {
    flex: 2,
    fontSize: 16,
    padding: 5,

  },
});
