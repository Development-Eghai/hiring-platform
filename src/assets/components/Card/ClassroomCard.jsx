import React from 'react';
import Card from 'react-bootstrap/Card';


const ClassroomCard = ({
    cardClassName,
    cardHeaderClassName,
    cardHeader,
    cardBodyClassName,
    cardBody,
}) => {

    return (
        <Card className={cardClassName}  >
            <Card.Header className={cardHeaderClassName}>
                 {cardHeader}
            </Card.Header>
            <Card.Body className={cardBodyClassName}>
                    {cardBody}
            </Card.Body>
        </Card>
    )
}

export default ClassroomCard