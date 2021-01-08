import React from 'react';
import Card from 'react-bootstrap/Card'

const Boss = (props) => {
    return (
        <Card id="boss-card" className="bg-dark text-white border-warning variant-top" style={{width: "310px"}} >
            <Card.Img id="boss-icon" src='https://i.pinimg.com/originals/a9/8b/c5/a98bc5ec7ad3948eb6d8485096a20c50.jpg' variant="top" alt="boss icon" style={{width: "300px"}}/>
            <h3>{props.name}</h3>
            <h6>Moves:</h6>{JSON.parse(props.moves).map(move => { return move + ' '})} 
        </Card>
    );
}

export default Boss;
