
const fetchCategories = async () =>{
    const response = await fetch('http://localhost:5000/categories')
    const Data = await response.json()
    return(Data);
}

const newCategorie = async (categorie) =>{ 
    const response = await fetch(`http://localhost:5000/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(categorie)
    })
    
    if (response.status === 400){
      const Data = response.json()
      return (Data)
    }  
}


export {fetchCategories, newCategorie}