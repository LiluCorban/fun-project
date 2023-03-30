import "./header.css";
import img from "../../Assets/img/logo.png";
import {NavLink} from "react-router-dom";

const HeaderLink = (props) =>{
    return(
        <NavLink to={props.link.address}>{props.link.name}</NavLink>

    )
}
const Header = (props) =>{
    let headerItems = props.links.links.map(link => <HeaderLink link={link}/>)

    return(
        <header>
            <nav>
                <img src={img} alt="logo"/>
                {headerItems}




            </nav>
        </header>
    )
}

export default Header;