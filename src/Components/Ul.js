import { Link } from "react-router-dom"

const Ul = (props) =>{
    return( <ul>
        {props.lignes.map(ligne=>{
          return  <li key={ligne.Slug}><Link to={`/${ligne.Slug}`}>{ligne.Name}</Link></li>
        })}
    </ul> )
}

export default Ul