import './LivroCard.css';
//informacoes do livro
function LivroCard({ livro }) {
    //destrusturandoo livro para pegar so os dados que vou usar 
    const { title, author, language, downloads} = livro;
    return (
        <div className="livro-card">
            <h3>{title}</h3>
            <p><strong>author</strong>{author}</p>
            <p><strong>idioma</strong>{language}</p>
            <p><strong>dowloads</strong>{downloads}</p>
        </div>
    
    );

}

export default LivroCard;