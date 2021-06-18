import React, {useState, useEffect} from "react"
import { StatusBar} from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import AsyncStorage from "./utils/asyncStorage"

import Home from "./pages/home"
import About from "./pages/about"
import Ranking from "./pages/ranking"
import Niveles from "./pages/niveles"
import Juego from "./pages/juego"


const Drawer = createDrawerNavigator();

export default function App() {

  const [authenticated, setAuthenticated] = useState(true)

  const checkUser = async () => {
    const user = await AsyncStorage.getData('@userData')
    //console.log(user)
    if (user) {
      setAuthenticated(true)
    }
  }

  useEffect(() =>{
    checkUser()
  },[])



  const applyAuthentication = (user) =>{
    console.log('Data a persistir: ', user)
    AsyncStorage.storeData('@userData', user)
    checkUser()
  }

  const applyLogout = () => {
    AsyncStorage.clearAll()
    setAuthenticated(false)
  }



  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      
        <Drawer.Navigator>
          {(authenticated) ?
          <>
            <Drawer.Screen name={'Niveles'} component={Niveles} applyLogout={applyLogout} />
            <Drawer.Screen name={'Juego'} component={Juego} />
            <Drawer.Screen name={'Ranking'} component={Ranking} />
            <Drawer.Screen name={'About'} component={About} />
          </>
          :
          <>
            <Drawer.Screen name={'Home'} component={Home} applyAuthentication={applyAuthentication} />
            <Drawer.Screen name={'About'} component={About} />
          </>
          }
         </Drawer.Navigator>
      
    </NavigationContainer>
  );
}