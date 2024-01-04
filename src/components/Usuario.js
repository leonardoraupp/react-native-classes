import React from 'react'
import { Text } from 'react-native'
import estilos from './estilos'
import If from './If'

export default props => {
    const usuario = props.usuario || {} // um objeto vazio é considerado true,null é false.
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={estilos.fonteMaior}>Renderização condicional avançada</Text>
                <Text>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
    )
}

// um objeto vazio é true, valida tbm se possui nome e email preenchidos.