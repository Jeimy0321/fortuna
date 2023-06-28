const PhrasesRam = (props) => {
    return(
      
         <article className="article">
            <h1 className="articleT">Galletas De La Suerte</h1>
            <p className="articleP">{props.data.phrase}</p>
            <h2 className="articleH">{props.data.author}</h2>
        </article>
    
    )
}

export default PhrasesRam