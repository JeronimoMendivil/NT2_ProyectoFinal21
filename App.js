import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./pages/home"
import About from "./pages/about"
import Ranking from "./pages/ranking"
import Niveles from "./pages/niveles"
import Juego from "./pages/juego"


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={'Home'}>
        <Drawer.Screen name={'Home'} component={Home} />
        <Drawer.Screen name={'Niveles'} component={Niveles} />
        <Drawer.Screen name={'Juego'} component={Juego} />
        <Drawer.Screen name={'Ranking'} component={Ranking} />
        <Drawer.Screen name={'About'} component={About} />



      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//<Stack.Screen name={'Niveles'} component={Niveles} />