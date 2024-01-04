import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './components/estilos';
// import Primeiro from './components/Primeiro';
// import Aleatorio from './components/Aleatorio';
// import Contador from './components/Contador';
// import Contador from './contador/ContadorAvancado'
// import ParImpar from './components/rendCondicional'
// import Familia from './components/Familia';
// import Membro from './components/Membro';
// import Usuario from './components/Usuario';
import Lista from './listas/Lista';

function App() {
  // let x = Math.floor(Math.random() * 101);
  // let y = Math.floor(Math.random() * 101);
  return (
    <SafeAreaView style={styles.container}>
      <Lista />

      {/*
      <Usuario usuario={{ nome: "Léo", email: "leo@hot.com" }} />
      <Usuario usuario={{ nome: "Carlos"}} />
      <Usuario usuario={{ email: "leo@hot.com" }} />
      <Usuario usuario={null} />
      <Contador/>
      <Familia>
        <Membro nome='Leonardo' sobrenome='Raupp' />
        <Membro nome='Isa' sobrenome='Silva' />
      </Familia>
      <Familia>
        <Membro nome='Caio' sobrenome='Souza' />
        <Membro nome='Sarah' sobrenome='Souza' />
      </Familia>
      <ParImpar num={1} />
      <ParImpar num={2} />
      <Contador inicial={10} passo={10} />
      <Contador />
      <Primeiro />
      <Aleatorio x={x} y={y} />
      */}
    </SafeAreaView>
  );
}
export default App;
