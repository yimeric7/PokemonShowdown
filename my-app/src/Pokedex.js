import React, { useEffect, useState } from "react";
import Pokecard from './Pokecard';
import './Pokedex.css';
import { ref, onValue } from "firebase/database";
import { db } from "./initFirebase";

function Pokedex() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        onValue(ref(db, "pokemon/-NC0ndDZnENOmDohgFFN"), (snapshot) => {
            setPokemon(snapshot.val())
        });
    }, [])

    return (
        <div className="Pokedex">
            <div className="Pokedex-cards">
                {pokemon?.map((p) => {
                    return <Pokecard key={p.id} id={p.id} name={p.name.english} type={p.type[0]} attack={p.base.attack}/>
                })}
            </div>
        </div>
    );

}

export default Pokedex;