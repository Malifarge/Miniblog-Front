import H2 from "./H2"
import moment from "moment"

const Card = (props) =>{

    const {Titre,Auteur,Date,Description,Categorie} = props.article

    return(
        <>
            <H2>{Titre}</H2>
            <div className="flex jcsb aic">
                <p>by {Auteur}</p>
                {props.categorie && <small>categorie: {Categorie}</small>}
            </div>
            <p>{Description}</p>
            <small className="asfe tierce">posté le {moment(`${Date}`).format('DD/MM/YYYY')} à {moment(`${Date}`).format('hh:mm')}</small>
        </>
    )
}

export default Card