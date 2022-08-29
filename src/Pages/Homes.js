import H1 from "../Components/H1";
import { useEffect,useState } from "react";
import Ul from "../Components/Ul";

const Home = () =>{

    const [categories,setCategories]= useState([])

    const fetchCategorie = async () =>{
        const response = await fetch('http://localhost:5000/categories')
        const Data = await response.json()
        setCategories(Data);
    }

    useEffect(()=>{
        fetchCategorie()
    },[])

    return (
        <>
        <H1>Home</H1>
        <Ul lignes={categories}/>
        </>
    )
}

export default Home