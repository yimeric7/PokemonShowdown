import React, {Component} from "react";
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    // can change this to pokemon API to get more data
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

    render () {
        return (
            <div className="Pokedex">
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;