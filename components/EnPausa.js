import React from "react";
import AppButton from "./AppButton";

const EnPausa = ({ navigation, gano, startGame }) => {
  return (
    <>
      <AppButton title={(gano) ? "Volver a Jugar" : "Comenzar"} onPress={startGame} />
      {(gano) ? <AppButton title="ranking" onPress={()=>{navigation.navigate('Ranking')}} /> : <></>}
    </>
  );
};

export default EnPausa
