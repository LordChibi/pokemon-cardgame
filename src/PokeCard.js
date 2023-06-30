import React, {Component} from "react";
import "./PokeCard.css"

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree=(number) =>(number <=999? `00${number}`.slice(-3):number)


class PokeCard extends Component{
    render(){
        let imgSrc=`${POKE_API}${padToThree(this.props.id)}.png`
        return(
            <div className="PokeCard">
            <h1 className="PokeCard-Title">{this.props.name}</h1>
                <div className="PokeCard-image">
                    <img  src={imgSrc} alt={this.props.name}></img>
                </div>
                <div className="PokeCard-Data"> type:{this.props.type}</div>
                <div className="PokeCard-Data"> exp:{this.props.exp}</div>
            </div>
        )
    }
}

export default PokeCard