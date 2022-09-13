import React, { Component } from "react";
import Pokedex from "./Pokedex";
import './PokeShowdown.css';

function refresh() {
    window.location.reload();
};

class PokeShowdown extends Component {
    static defaultProps = {
        pokemon: [
            {id: 1, name: 'Bulbasaur', type: 'grass', base_experience: 12},
            {id: 2, name: 'Ivysaur', type: 'grass', base_experience: 155},
            {id: 3, name: 'Venusaur', type: 'grass', base_experience: 324},
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 5, name: 'Charmeleon', type: 'fire', base_experience: 157},
            {id: 6, name: 'Charizard', type: 'fire', base_experience: 365},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 8, name: 'Wartortle', type: 'water', base_experience: 167},
            {id: 9, name: 'Blastoise', type: 'water', base_experience: 344},
            {id: 10, name: 'Caterpie', type: 'bug', base_experience: 72},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 101},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 13, name: 'Weedle', type: 'bug', base_experience: 12},
            {id: 14, name: 'Kakuna', type: 'bug', base_experience: 78},
            {id: 15, name: 'Beedrill', type: 'bug', base_experience: 138},
            {id: 16, name: 'Pidgey', type: 'normal', base_experience: 66},
            {id: 17, name: 'Pidgeotto', type: 'flying', base_experience: 140},
            {id: 18, name: 'Pidgeot', type: 'flying', base_experience: 289},
            {id: 19, name: 'Rattata', type: 'normal', base_experience: 10},
            {id: 20, name: 'Raticate', type: 'normal', base_experience: 70},
            {id: 21, name: 'Spearow', type: 'flying', base_experience: 20},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 130, name: 'Gyarados', type: 'water', base_experience: 352},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
            {id: 143, name: 'Snorlax', type: 'normal', base_experience: 373},
            {id: 144, name: 'Articuno', type: 'ice', base_experience: 432},
            {id: 145, name: 'Zapdos', type: 'electric', base_experience: 427},
            {id: 146, name: 'Moltres', type: 'fire', base_experience: 431},
            {id: 149, name: 'Dragonite', type: 'dragon', base_experience: 366},
            {id: 150, name: 'Mewtwo', type: 'psychic', base_experience: 400},
            {id: 151, name: 'Mew', type: 'psychic', base_experience: 400}
        ]
    };

    getHand() {
        const cardsChosen = 8;
        let pokedex = [...this.props.pokemon];
        let pokeHand = [];
        for (let i = 0; i < cardsChosen; i++) {
            let randIdx = Math.floor(Math.random() * pokedex.length);
            let randomPokemon = pokedex.splice(randIdx, 1)[0];
            pokeHand.push(randomPokemon);
        }
        return pokeHand;
    };

    render () {

        let hand1 = [];
        let hand2 = this.getHand();
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
                <h1 className="PokeShowdown">Pokemon Showdown!
                    <button onClick={refresh}>
                        New Matchup!
                    </button>
                </h1>
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