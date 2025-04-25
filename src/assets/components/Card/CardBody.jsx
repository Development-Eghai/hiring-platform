import React from 'react';
import Card from 'react-bootstrap/Card';

const CardBody = ({
    cardClassName,
    cardBodyClassName,
    cardBody,
    onClick
}) => {

    return (
        <Card className={cardClassName} onClick={onClick}>
            <Card.Body className={cardBodyClassName}>
                    {cardBody}
            </Card.Body>
        </Card>
    )
}

export default CardBody