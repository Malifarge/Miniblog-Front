import { Link } from "react-router-dom"

const Nav = () =>{
    return(
        <header>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/NewCategorie'}>NewCategorie</Link>
                <Link to={'/NewArticle'}>NewArticle</Link>
            </nav>
        </header>
    )
}

export default Nav