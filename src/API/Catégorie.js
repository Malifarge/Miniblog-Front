
const fetchCategories = async () =>{
    const response = await fetch('http://localhost:5000/categories')
    const Data = await response.json()
    return(Data);
}

export {fetchCategories}