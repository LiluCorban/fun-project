import "./section3.css"
import Card from "./card/card";




const Section3 = (props) => {
    let cardItems = props.products.map(product => <Card card={product}/>)
    return (
        <section className="block-one">
            <div className="section-block">

                <h2>Featured parties</h2>
                <div className="cards">
                    {cardItems}
                </div>

            </div>

            


        </section>
    )
}

export default Section3