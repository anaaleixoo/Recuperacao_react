//campo de busca para pesquisar livros 
function Busca ({ busca, setBusca}) {
    return (
        <div className="busca"> 
        <input
        type="text"
        placeholder="Buscar livros..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        />
    </div>
    );
}

//exporta o componente para ser usado em outros arquivos 
export default Busca; 