import "./footer.css"
import bigLogo from "../../Assets/img/bigLogo.png"
import HeaderLink from "../Links/Links";
import ttLogo from "../../Assets/img/tiktok.png"
import fbLogo from "../../Assets/img/facebook.png"
import instaLogo from "../../Assets/img/instagram.png"
import pinLogo from "../../Assets/img/pinterest.png"
import linLogo from "../../Assets/img/linkend.png"

const Footer = (props) =>{
    let footerItems = props.links.links.map(link => <HeaderLink link={link}/>)
    return(
        <footer>
            <h2>Lean into the joy of getting people together</h2>
            <hr/>
            <div className="nav-bar">
            <div className="footer-bar">  {footerItems}</div>
                <div className="social">
                    <a href="http://www.tiktok.com"><img src={ttLogo} alt="logo"/></a>
                    <a href="http://www.facebook.com"><img src={fbLogo} alt="logo"/></a>
                    <a href="http://www.instagram.com"><img src={instaLogo} alt="logo"/></a>
                    <a href="http://www.pinterest.com"><img src={pinLogo} alt="logo"/></a>
                    <a href="http://linkedin.com"><img src={linLogo} alt="logo"/></a>

                </div>
            </div>

            <img src={bigLogo} alt="logo"/>


        </footer>
    )
}

export default Footer