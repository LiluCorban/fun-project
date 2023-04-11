import "./header.css";
import img from "../../Assets/img/logo.png";
import HeaderLink from "../Links/Links";


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