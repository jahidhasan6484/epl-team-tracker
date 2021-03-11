import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TeamCard = (props) => {
    const { strTeam, strSport, idTeam, strTeamBadge } = props.bodyToCard;
    return (
        <div className="col-md-4 my-3">
            <Card>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title>{strTeam}</Card.Title>
                        <p>Sports Type: {strSport}</p>
                        <Button as={Link} to={`/allTeam/${idTeam}`} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamCard;