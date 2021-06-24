import React from "react";
import AppButton from "./AppButton";

const EnPausa = ({ navigation, gano, startGame }) => {
  return (
    <>
      <AppButton title={(gano) ? "Volver a Jugar" : "Comenzar"} onPress={startGame} />
      {(gano) ? <AppButton title="niveles" onPress={()=>{navigation.navigate('Niveles')}} /> : <></>} 
    </>
  );
};

export default EnPausa
