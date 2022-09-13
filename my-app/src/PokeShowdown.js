import React, { Component } from "react";
import Pokedex from "./Pokedex";
import './PokeShowdown.css';

class PokeShowdown extends Component {
    static defaultProps = {
        pokemon: [
            {id: 1, name: 'Bulbasaur', type: 'grass', base_experience: 12},
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 6, name: 'Charizard', type: 'fire', base_experience: 365},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
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