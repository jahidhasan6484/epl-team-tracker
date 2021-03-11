import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faFlag, faFutbol, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import facebookIcon from '../Icon/Facebook.png';
import twitterIcon from '../Icon/Twitter.png';
import youtubeIcon from '../Icon/YouTube.png';
import './TeamDetails.css';

const TeamDetails = () => {
    const { idTeam } = useParams();

    const [teamDetails, setTeamDetails] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [idTeam])

    return (

        <div className="container my-5">
            <Card className="details-header">
                <Card.Img src={teamDetails.strStadiumThumb} alt="" height="400rem" />
                <Card.ImgOverlay>
                    <img className="img-fluid" src={teamDetails.strTeamBadge} alt="" width="200rem" />
                </Card.ImgOverlay>
            </Card>

            <div className="team-details">
                <div className="row details-card">
                    <div className="col-md-6">
                        <h1>{teamDetails.strTeam}</h1>
                        <h3><FontAwesomeIcon icon={faMapMarker} /> Founded: {teamDetails.intFormedYear}</h3>
                        <h3><FontAwesomeIcon icon={faFlag} /> Country: {teamDetails.strCountry}</h3>
                        <h3><FontAwesomeIcon icon={faFutbol} /> Sport Type: {teamDetails.strSport}</h3>
                        <h3><FontAwesomeIcon icon={faMarsStroke} />  Gender: {teamDetails.strGender}</h3>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={teamDetails.strTeamLogo} alt="" />
                    </div>
                </div>
                <div className="details-article">
                    <p>{teamDetails.strDescriptionEN}</p>
                </div>
                <div className="footer">
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src={twitterIcon} roundedCircle width="50px" />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={facebookIcon} roundedCircle width="50px" />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={youtubeIcon} roundedCircle width="50px" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails; <p>This is team details</p>