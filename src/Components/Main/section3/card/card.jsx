
import "./card.css"
const ButtonsItem = (props) =>{
    return(
        <button>{props.data}</button>

    )
};
const Card = (props) => {
    return (

        <div className="card-block">

            <img src={props.card.img} alt="card"/>
            <div className="description-block">
            <h3> {props.card.head} </h3>
            <p>{props.card.description}</p>


                <div className="buttons-block">
            {props.card.buttons.map(data => <ButtonsItem data = {data}/>)}
            </div>
            </div>



        </div>
    )
}

export default Card