import React,{Component} from "react";
import PokeCard from "./PokeCard";
import"./PokeDex.css"

class PokeDex extends Component{
      render(){
        let title;
        if(this.props.isWinner){
            title=(
                <h1 className="PokeDex-Winner">winning Hand</h1>
            );
        }else{
            title=<h1 className="PokeDex-Loser">losing hand</h1>
        }
        return(
        <div className="PokeDex">
            <h4>total experience:{this.props.exp}</h4>
            {title}
            <div className="PokeDex-Cards">
            {this.props.pokemon.map((p)=>(
            <PokeCard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
            />
        ))}
        </div>
        </div>
        )
       }
}

export default PokeDex