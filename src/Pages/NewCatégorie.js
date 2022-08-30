import { useState } from "react";
import { useNavigate } from "react-router-dom";

import H1 from "../Components/H1";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";
import Button from "../Components/Button";

import { newCategorie } from "../API/Catégorie";

const NewCategorie = () =>{

    const[nom,setNom] = useState("")
    const[description,setDescription] = useState("")
    const[errors,setErrors] = useState([])

    const navigate = useNavigate()

    const handleNomChange = e =>{
        setNom(e.target.value)
    }

    const handleDescriptionChange = e =>{
        setDescription(e.target.value)
    }

    const handleSubmit = async e=>{

        e.preventDefault()

        const categorie = {
            Name: nom,
            Description : description
        }

        const Data = await newCategorie(categorie)

        if (Data){
            setErrors(Data)
        }else{
            navigate(`/`)
        }

    }
    return (
        <>
        <H1>NewCatégorie</H1>
        <form onSubmit={handleSubmit}>
            <Input
            label="Nom"
            type="text"
            value={nom}
            placeholder="Nom..."
            handleChange={handleNomChange}
            required
            error={errors.filter(error=>error.param==="Name")}
            />

            <TextArea
            label="Descrtiption"
            value={description} 
            placeholder="Description..."
            handleChange={handleDescriptionChange}
            required
            error={errors.filter(error=>error.param==="Description")}
            />

            <Button
            type="submit"
            disabled={!nom || !description}
            text="Submit"
            />

        </form>
        </>
    )
}

export default NewCategorie