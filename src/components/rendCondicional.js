import React from 'react'
import { Text, View } from 'react-native'
import estilos from './estilos'

export default ({ num = 0 }) => {
    return (
        <View>
            <Text>Renderização condicional</Text>
            {num % 2 === 0
                ? <Text style={estilos.fonteMaior}>Par</Text>
                : <Text style={estilos.fonteMaior}>Impar</Text>}
        </View>


    )
}