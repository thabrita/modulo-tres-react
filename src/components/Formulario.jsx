function Formulario() {
    function ligaClick() {
        console.log('Cliquei no botão')
    }

    function pegaInput(event) {
        console.log(event.target.value)
    }

    return (
        <div>
            <input onChange={pegaInput} placeholder="Digite seu nome" />
            <button onClick={ligaClick}>Enviar</button>
        </div>
    )
}

export default Formulario