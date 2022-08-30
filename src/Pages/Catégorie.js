/* eslint-disable react-hooks/exhaustive-deps */

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import H1 from "../Components/H1";
import Button from "../Components/Button";
import Card from "../Components/Card";

import { fetchArticles } from "../API/Articles";
import { fetchCategories } from "../API/Catégorie";


const Categorie = () =>{

    const [articles,setArticles] = useState([])
    const [categorie,setCategorie] = useState({})
    const {slug} = useParams()
    const navigate = useNavigate() 

    const fetchDataArticles = async () =>{
        const Data = await fetchArticles(slug)
        setArticles(Data)
    }

    const fetchDataCategorie = async () =>{
        const Data = await fetchCategories()
        const filterData = Data.find(d=>d.Slug===slug)
        setCategorie(filterData)
    }

    const handleNewClick = () =>{
        navigate(`/NewArticle/${slug}`)
    }

    useEffect(()=>{
        fetchDataArticles()
        fetchDataCategorie()
    },[])

    return (
        <>
        <section>
            <article className="flex jcsb aic">
                <H1>{categorie.Name}</H1>
                <Button
                text={"New Article"}
                handleClick={handleNewClick}
                />
            </article>
            <small className="tierce">{categorie.Description}</small>
        </section>
        <section className="flex wrap g-30 m-t-10">
            {articles.map(article=>{
                return <article key={article.Slug} className="b p-10 w-280">
                    <Card article={article}/>
                </article>
            })}
        </section>
        </>

    )
}

export default Categorie