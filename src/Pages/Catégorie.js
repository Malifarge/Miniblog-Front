/* eslint-disable react-hooks/exhaustive-deps */

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticles } from "../API/Articles";
import H1 from "../Components/H1";
import Button from "../Components/Button";
import Card from "../Components/Card";

const Categorie = () =>{

    const [articles,setArticles] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate() 

    const fetchDataArticles = async () =>{
        const Data = await fetchArticles(slug)
        setArticles(Data)
    }

    const handleNewClick = () =>{
        navigate(`/NewArticle/${slug}`)
    }

    useEffect(()=>{
        fetchDataArticles()
    },[])


    return (
        <>
        <section>
            <H1>{slug}</H1>
            <Button
            text={"New Article"}
            handleClick={handleNewClick}
            />
        </section>
        <section>
            {articles.map(article=>{
                return <article key={article.Slug}>
                    <Card article={article}/>
                </article>
            })}
        </section>
        </>

    )
}

export default Categorie