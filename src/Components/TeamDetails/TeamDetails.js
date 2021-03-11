import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faFlag, faFutbol, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import facebookIcon from '../Icon/Facebook.png';
import twitterIcon from '../Icon/Twitter.png';
import youtubeIcon from '../Icon/YouTube.png';
import './TeamDetails.css';
import maleImage from '../Photo/Rectangle 28.png';
import femaleImage from '../Photo/female.png';


const TeamDetails = () => {
    const { idTeam } = useParams();

    const [teamDetails, setTeamDetails] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [idTeam])

    const {strStadiumThumb, strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strTwitter, strFacebook, strYoutube } = teamDetails;

    return (

        <div className="container my-5 team-details-style">
            <div>
                <Card className="details-header">
                    <Card.Img src={strStadiumThumb} alt="" height="400rem" />
                    <Card.ImgOverlay>
                        <img className="img-fluid" src={strTeamBadge} alt="" width="200rem" />
                    </Card.ImgOverlay>
                </Card>
            </div>


            <div className="team-details">
                <div className="row details-card">
                    <div className="col-md-6">
                        <h1>{strTeam}</h1>
                        <p><FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMarsStroke} />  Gender: {strGender}</p>
                    </div>
                    <div className="col-md-6">
                        {
                            teamDetails.strGender === "Male" ? <img className="img-fluid" src={maleImage} alt="" /> : <img className="img-fluid" src={femaleImage} alt="" />
                        }
                    </div>
                </div>
                <div className="details-article">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="footer">
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <a href={`https://${strTwitter}`} target="_blank"><Image src={twitterIcon} roundedCircle width="50px" /></a>
                            </Col>
                            <Col xs={6} md={4}>
                                <a href={`https://${strFacebook}`} target="_blank"><Image src={facebookIcon} roundedCircle width="50px" /></a>
                            </Col>
                            <Col xs={6} md={4}>
                                <a href={`https://${strYoutube}`} target="_blank"><Image src={youtubeIcon} roundedCircle width="50px" /></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails; <p>This is team details</p>