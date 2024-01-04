import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import estilos from '../components/estilos'

export default props => {
    return (
        <View style={styles.display}>
            <Text style={[estilos.fonteMaior, styles.displayText]}>{props.num}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    displayText: {
        color: '#fff',        
    }
})