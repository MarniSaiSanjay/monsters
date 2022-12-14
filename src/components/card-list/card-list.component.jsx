import React from "react";
import './card-list.style.css'
import { Card } from "../card/card.component.jsx";

export const CardList = (props) => {
    console.log(props)

    return <div className="card-list">
        {/* {props.name} */}
        {/* {props.children} */}
        {
            props.monsters.map(m => (
                <Card key={m.id} monster={m} />
            ))
        }
    </div>
}
