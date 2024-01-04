import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import estilos from '../components/estilos'
import DisplayContador from './DisplayContador'
import BotoesContador from './BotoesContador'

export default ({ num = 0 }) => {
    [num, setNum] = useState(0)
    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)


    return (
        <View style={styles.View}>
            <Text style={estilos.fonteMaior}>Contador</Text>
            <DisplayContador num={num} />
            <BotoesContador inc={inc} dec={dec} />
        </View>
    )
}
const styles = StyleSheet.create({
    View: {
        alignItems: 'center',
        padding: 8,
        margin: 8,
    }
})
// O componente Contador gerencia o estado através do useState.
// Comunição direta: O componente filho se comunica com o componente pai através de props(variaveis).(Contador x Display).
// Comunição indireta: O componente filho se comunica com o componnete pai através de props(funções).(Contador x Botoes). 
