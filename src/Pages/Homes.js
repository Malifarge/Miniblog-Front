import H1 from "../Components/H1";
import { useEffect,useState } from "react";
import Ul from "../Components/Ul";
import Card from "../Components/Card";

const Home = () =>{

    const [categories,setCategories]= useState([])
    const [articles,setArticles]= useState([])


    const fetchCategories = async () =>{
        const response = await fetch('http://localhost:5000/categories')
        const Data = await response.json()
        setCategories(Data);
    }

    const fetchArticles = async () =>{
        const response = await fetch('http://localhost:5000/articles')
        const Data = await response.json() 
        setArticles(Data);
    }

    useEffect(()=>{
        fetchCategories()
        fetchArticles()
    },[])

    return (
        <>
        <H1>Home</H1>
        <section>
            <Ul lignes={categories} link={true}/>
            <article>
                {articles.map(article=>{
                    return <Card key={article.Slug} article={article}/>
                })}
            </article>
        </section>
        </>
    )
}

export default Home