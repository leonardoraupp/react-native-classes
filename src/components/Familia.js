import React from 'react'
import { Text } from 'react-native'
import estilos from './estilos'

export default props => {
    return (
        <>
            <Text style={estilos.fonteMaior}>Familia</Text>
            <Text>Topo</Text>
            {props.children}
            <Text>Fim</Text>
        </>
    )
}

// A partir de props.children podemos renderizar items filhos dentro de um componente pai via outro componente terceiro.pags10110
