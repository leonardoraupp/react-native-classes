import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import estilos from '../components/estilos'

export default props => {
    return (
        <View style={style.botaoDesign}>
            <Button title='+' onPress={props.inc}></Button>
            <Button title='-' onPress={props.dec}></Button>
        </View>
    )
}
const style = StyleSheet.create({
    botaoDesign: {
        flexDirection: 'row',
    }
})