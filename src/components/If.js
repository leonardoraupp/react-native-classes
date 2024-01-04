export default props => {
    if (props.teste) { // se teste for true.
        return props.children // retorna componentes filhos.
    } else {
        false
    }
}