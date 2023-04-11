
import {NavLink} from "react-router-dom";

const HeaderLink = (props) =>{
    return(
        <NavLink to={props.link.address}>{props.link.name}</NavLink>

    )
}
export default HeaderLink