import React from 'react'
import { Text } from 'react-native'
import estilos from '../components/estilos'
import produtos from './listaDeProdutos'

export default props => {
    function obterLista() {
        return produtos.map(p => {
            return (
                <Text key={p.id}>
                    {p.id}) O produto {p.nome} custa R${p.preco}.
                </Text>
            )
        })
    }
    return (
        <>
            <Text style={estilos.fonteMaior}>Renderizando listas</Text>
            {/* {obterLista()} */}
            { produtos.map(p => {
                return <Text>{p.nome}</Text>
            })}
        </>
    )
}