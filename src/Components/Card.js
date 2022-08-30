import H2 from "./H2"
import moment from "moment"

const Card = (props) =>{

    const {Titre,Auteur,Date,Description} = props.article

    return(
        <>
            <H2>{Titre}</H2>
            <p>by {Auteur}</p>
            <p>{Description}</p>
            <small>{moment(`${Date}`).format('DD/MM/YYYY , hh:mm:ss')}</small>
        </>
    )
}

export default Card