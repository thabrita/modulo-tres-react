import livros from "../service/dados"

function Lista() {
    return (
        <div>
            {livros.map(item => {
                return (
                    <div key={item.id}> 
                        <h2>{item.nome}</h2>
                        <p>{item.autor}</p>
                        <p>{item.genero}</p>
                        <img src={item.capa} width="400" />
                    </div>
                )
            })}
        </div>
    )
}

export default Lista