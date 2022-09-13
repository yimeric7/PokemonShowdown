import React, { Component } from "react";
import Pokedex from "./Pokedex";
import './PokeShowdown.css';

class PokeShowdown extends Component {
    static defaultProps = {
        pokemon: [
            {id: 151, name: 'Mew', type: 'psychic', base_experience: 400},
            {id: 150, name: 'Mewtwo', type: 'psychic', base_experience: 400},
            {id: 6, name: 'Charizard', type: 'fire', base_experience: 365},
            {id: 130, name: 'Gyarados', type: 'water', base_experience: 352},
            {id: 9, name: 'Blastoise', type: 'water', base_experience: 344},
            {id: 143, name: 'Snorlax', type: 'normal', base_experience: 373},
            {id: 149, name: 'Dragonite', type: 'dragon', base_experience: 366},
            {id: 144, name: 'Articuno', type: 'ice', base_experience: 432},
            {id: 145, name: 'Zapdos', type: 'electric', base_experience: 427},
            {id: 146, name: 'Moltres', type: 'fire', base_experience: 431}
        ]
    };

    render () {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randomPokemon);
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience,
            0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience,
            0);
        let outcome1;
        let outcome2;

        if (exp1 > exp2) {
            outcome1 = 'WINNER!';
            outcome2 = 'LOSER!';
        } else {
            outcome1 = 'LOSER!';
            outcome2 = 'WINNER!';
        }

        let title1;
        let title2;
        if (outcome1 === 'WINNER!') {
            title1 = <h1 className="PokeShowdown-winner">Winning Hand</h1>;
            title2 = <h1 className="PokeShowdown-loser">Losing Hand</h1>;
        }
        else {
            title2 = <h1 className="PokeShowdown-winner">Winning Hand</h1>;
            title1 = <h1 className="PokeShowdown-loser">Losing Hand</h1>;
        }

        return (
            <div>
                <h1 className="PokeShowdown">Pokemon Showdown!</h1>

                {title1}
                <h4 className="PokeShowdown-data">Total Experience: {exp1}</h4>
                <Pokedex pokemon = {hand1}/>

                {title2}
                <h4 className="PokeShowdown-data">Total Experience: {exp2}</h4>
                <Pokedex pokemon ={hand2}/>
            </div>
        );
    }
}

export default PokeShowdown;