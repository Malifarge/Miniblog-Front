
import { useEffect,useState } from "react";

import H1 from "../Components/H1";
import Ul from "../Components/Ul";
import Card from "../Components/Card";

import { fetchCategories } from "../API/Catégorie";
import { fetchArticles } from "../API/Articles";

const Home = () =>{

    const [categories,setCategories]= useState([])
    const [articles,setArticles]= useState([])

    const fetchDataCategories = async () =>{
        const Data = await fetchCategories()
        setCategories(Data);
    }

    const fetchDataArticles = async () =>{
        const Data = await fetchArticles("")
        setArticles(Data);
    }

    useEffect(()=>{
        fetchDataCategories()
        fetchDataArticles()
    },[])

    return (
        <>
        <H1>Home</H1>
        <section className="flex tel-clmn">
            <Ul lignes={categories} link={true}/>
            <article className="flex clmn aic w100-100 g-30">
                {articles.map(article=>{
                    return <div className="w100-50 flex clmn b p-10">
                    <Card key={article.Slug} article={article} categorie/>
                    </div>
                })}
            </article>
        </section>
        </>
    )
}

export default Home