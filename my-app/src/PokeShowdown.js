import React, { useEffect, useState } from "react";
import './PokeShowdown.css';
import {ref, onValue} from "firebase/database";
import {db} from "./initFirebase";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

function PokeShowdown() {
    const [pokedex, setPokedex] = useState([]);
    const [hand1, setHand1] = useState([]);
    const [hand2, setHand2] = useState([]);
    const [att1, setAtt1] = useState(0);
    const [att2, setAtt2] = useState(0);

    useEffect(() => {
        onValue(ref(db, "pokemon/-NC0ndDZnENOmDohgFFN"), (snapshot) => {
            setPokedex(snapshot.val());
        });
    }, [])


    function getHand() {
        const cardsChosen = 4;
        let pokeHand = [];
        for (let i = 0; i < cardsChosen; i++) {
            let randIdx = Math.floor(Math.random() * pokedex.length);
            let randomPokemon = pokedex.splice(randIdx, 1)[0];
            pokeHand.push(randomPokemon);
        }
        return pokeHand;
    };

    function calculateWinner() {
        let tempHand1 = getHand();
        let tempHand2 = getHand();

        setHand1(tempHand1);
        setHand2(tempHand2);

        setAtt1(tempHand1.reduce( (attack, pokemon) => attack + pokemon.base.attack, 0));
        setAtt2(tempHand2.reduce( (attack, pokemon) => attack + pokemon.base.attack, 0));
    }

    if (pokedex.length > 0 && !hand1.length > 0) {
        calculateWinner()
    }

    return (
        <div>
            <h1 className="PokeShowdown">Pokemon Showdown!
            </h1>
            <h1 className={att1 > att2 ? 'PokeShowdown-winner' : 'PokeShowdown-loser'}>
                {att1 > att2 ? 'Winning Hand' : 'Losing Hand'}</h1>
            <h4 className="PokeShowdown-data">Total Attack: {att1}</h4>
            <div className="Pokedex-cards">
                {hand1.length > 0 && hand1?.map((p) => {
                    return <Pokecard key={p.id} id={p.id} name={p.name.english} type={p.type[0]} attack={p.base.attack}/>
                })}
            </div>

            <h1 className={att2 > att1 ? 'PokeShowdown-winner' : 'PokeShowdown-loser'}>
                {att2 > att1 ? 'Winning Hand' : 'Losing Hand'}</h1>
            <h4 className="PokeShowdown-data">Total Attack: {att2}</h4>
            <div className="Pokedex-cards">
                {hand2.length > 0 && hand2?.map((p) => {
                    return <Pokecard key={p.id} id={p.id} name={p.name.english} type={p.type[0]} attack={p.base.attack}/>
                })}
            </div>

        </div>
    );

}

export default PokeShowdown;