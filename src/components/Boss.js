import React from 'react';
import Card from 'react-bootstrap/Card'

const Boss = (props) => {
    return (
        <Card className="bg-dark text-white border-warning variant-top" style={{width: "200px"}} >
            <h3>{props.name}</h3>
            <Card.Img id="boss-icon" src={props.img} variant="top" alt="boss icon" />
        </Card>
    );
}

export default Boss;
