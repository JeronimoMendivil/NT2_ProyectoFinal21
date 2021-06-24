import React, {useState, useContext} from "react"
import { StatusBar} from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import GlobalContext from "./global/context"
import AsyncStorage from "./utils/asyncStorage"

import Home from "./pages/home"
import About from "./pages/about"
import Ranking from "./pages/ranking"
import Niveles from "./pages/niveles"
import Juego from "./pages/juego"


const Drawer = createDrawerNavigator();

export default function App() {

  const [authenticated, setAuthenticated] = useState(false)
  
  const userData = useContext(GlobalContext);
  console.log(userData);


/*  
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
 */
/* 
  const guardarInvitado = ({ nombre, mail }) => {
    console.log({nombre, mail});
  }
 */

  const applyAuthentication = (user) =>{
    console.log('Data a persistir: ', user)
    AsyncStorage.storeData('@userData', user)
    userData.userName = user.givenName;
    //checkUser()
    setAuthenticated(true)
    
  }

  const userDatos = async () => {
    const user = await AsyncStorage.getData('@userData')
    //console.log(user)
  }

  const applyLogout = () => {
    AsyncStorage.clearAll()
    setAuthenticated(false)
  }



  return (
    <GlobalContext.Provider value={ { applyAuthentication, applyLogout, userDatos} }>
      <NavigationContainer>
        <StatusBar style="auto" />
        
          <Drawer.Navigator>
            {(authenticated) ?
            <>
              <Drawer.Screen name={'Niveles'} component={Niveles} />
              <Drawer.Screen name={'Juego'} component={Juego} />
              <Drawer.Screen name={'Ranking'} component={Ranking} />
              <Drawer.Screen name={'About'} component={About} />
            </>
            :
            <>
              <Drawer.Screen name={'Home'} component={Home}>
             {/*  {props => <Home {...props} applyAuthentication={applyAuthentication} />} */}
              </Drawer.Screen>
              <Drawer.Screen name={'About'} component={About} />
            </>
            }
          </Drawer.Navigator>
        
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}