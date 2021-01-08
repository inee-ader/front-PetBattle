import React from 'react';
import Card from 'react-bootstrap/Card'

const Boss = (props) => {
    return (
        <Card id="boss-card" className="bg-dark text-white border-warning variant-top" style={{width: "310px"}} >
            <Card.Img id="boss-icon" src={props.img} variant="top" alt="boss icon" style={{width: "300px"}}/>
            <h3>{props.name}</h3>
            <h1>HP: {props.hp}</h1>
        </Card>
    );
}

export default Boss;
