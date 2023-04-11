import Card from "./Card/Card";
import "./Pricing.css"




const Pricing = (props) => {
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

export default Pricing