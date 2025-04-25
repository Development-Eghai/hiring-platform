import React from 'react';
import Card from 'react-bootstrap/Card';

const HeaderCard = ({
    cardClassName,
    cardTitleClassName,
    cardBody
}) => {

    return (
        <Card className={cardClassName}>
            <Card.Body>
                <Card.Title className={cardTitleClassName}>
                    {cardBody}
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default HeaderCard