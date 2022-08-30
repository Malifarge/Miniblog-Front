const fetchArticles = async (slug) =>{
    const response = await fetch(`http://localhost:5000/articles/${slug}`)
    const Data = await response.json() 
    return(Data);
}

export {fetchArticles}