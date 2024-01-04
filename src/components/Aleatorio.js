import React from 'react';
import {Text} from 'react-native';
import estilo from './estilos'

export default props => {
  const menor = props.x < props.y ? props.x : props.y;
  const maior = props.x > props.y ? props.x : props.y;
  return (
    <Text style={estilo.fonteMaior}>
      O número {maior} é maior que o número {menor}.
    </Text>
  );
};
