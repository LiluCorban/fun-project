import "./section1.css"
import img1 from "../../Assets/img/img1.png"
const Section1= ()=>{
    return(
        <section className="container">
            <div className="left-side">
        <h1>A party so perfect you won’t believe</h1>
                <p>We provide hosts with tools to make elevating gatherings easier, including party concepts, styled and shoppable
                    decor, customized guidelines, with timelines and checklists curated by the pros.</p>

                <h2>We're all about DIY ease, not DIY</h2>
                <div className="buttons">
                    <button><a href="fun-project/src/Components/section1">START A PARTY</a> </button>
                    <button><a href="fun-project/src/Components/section1">HOW IT WORKS</a> </button>
                </div>
            </div>
            <div className="right-side">
                <img src={img1} alt="img"/>
            </div>

        </section>
    )

}
export default Section1;