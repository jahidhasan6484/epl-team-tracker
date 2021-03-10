import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faFlag, faFutbol, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';
import { Col, Container, Image, Row } from 'react-bootstrap';
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
            <div className="row team-details-card">
                <div className="col-md-6">
                    <h2>{teamDetails.strTeam}</h2>
                    <p><FontAwesomeIcon icon={faMapMarker} />Founded: {teamDetails.intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} />Country: {teamDetails.strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} />Sports Type: {teamDetails.strSport}</p>
                    <p><FontAwesomeIcon icon={faMarsStroke} />Gender: {teamDetails.strGender}</p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={teamDetails.strTeamLogo} alt="" />
                </div>
            </div>
            <div className="team-details-article">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur architecto aperiam expedita laborum enim saepe ea cum. Quibusdam commodi accusamus, illo, velit nobis exercitationem pariatur minima laborum voluptates explicabo saepe.
                Provident distinctio, officia a consectetur cumque nemo alias laborum. Quis facilis, blanditiis omnis ullam fugiat quas eos dolore. Tenetur odio impedit voluptas esse amet dolores alias beatae, eum excepturi quas?
                Placeat amet aliquid laboriosam, tempora quam quisquam totam, cum esse ad repellat reiciendis, mollitia blanditiis quae! Eius, id quod inventore aperiam quam odit eligendi reprehenderit animi libero dolores officiis qui?
                Aut exercitationem neque quibusdam beatae explicabo esse, adipisci accusantium dolorem unde suscipit voluptatem. Tempora ducimus officiis doloribus, nostrum atque voluptatem eum ut odio obcaecati culpa nam aliquam dicta. Magnam, similique.
                Minus neque vel illum, officia quis eius hic minima facere consectetur labore quae aliquid possimus esse nostrum aspernatur laudantium accusantium corrupti vero reiciendis. Neque sit quaerat maiores rem, quam amet?
                Minima quas vero perferendis natus, beatae reiciendis eligendi unde sed cumque perspiciatis, quae illum in suscipit eius? Nulla dolor corporis, perferendis iusto dicta quasi eum vero, sed a, nemo veniam.
                Et eveniet vitae pariatur perspiciatis quae iure voluptatum, aut consectetur ullam. Aut dolorem ipsum ad, ea temporibus provident iste odio voluptates dicta, doloribus aperiam, optio dolorum debitis architecto ab non.
                Error reiciendis aspernatur, hic nisi reprehenderit, ut odit praesentium architecto iste sequi mollitia fugiat doloribus neque sunt. Quod laudantium, esse ducimus saepe reiciendis nam exercitationem iste adipisci ipsum. Accusantium, ducimus?
                Voluptatum vel adipisci dolore veniam natus! <br></br> <br></br> Laborum illo, cupiditate veritatis repellendus adipisci quidem debitis asperiores magnam beatae iste praesentium sapiente incidunt perferendis quia, suscipit porro consequatur unde et quisquam earum!
                Incidunt quas atque ratione dolores consectetur? Nihil debitis sed deleniti repellendus, eaque commodi possimus fugiat? Sequi eaque ipsam, esse sed quos, velit reprehenderit aspernatur autem illum voluptatem amet harum ab.
                Recusandae ullam, iure illum dolorum quaerat expedita neque necessitatibus optio facere rem voluptates voluptate quibusdam eos vel! Mollitia sapiente debitis minima velit optio explicabo consequuntur culpa quos? Iusto, error magni.
                Officiis suscipit est consequuntur libero fugit aliquid repellendus fugiat praesentium fuga pariatur, dolor error deleniti possimus rerum veritatis. Explicabo magnam eligendi assumenda beatae id totam laudantium voluptates perspiciatis esse ex!
                Obcaecati totam soluta mollitia. Deleniti accusamus, id, est totam, mollitia perferendis veritatis nihil ipsa eum ad similique modi perspiciatis? Quibusdam animi odit ab est repudiandae fuga mollitia exercitationem, officia minus!
                Obcaecati perferendis ipsam, earum consequatur consequuntur impedit dicta iure vitae harum! Maiores aspernatur modi autem porro laborum! Explicabo praesentium ut mollitia consequuntur architecto consectetur minus repudiandae eius. Nihil, aliquam perspiciatis.
                Ex est pariatur saepe, fugiat veritatis sit sint nam. Rem at voluptas animi neque quaerat harum maiores laboriosam perspiciatis, quasi obcaecati dolorum quae, ipsam eligendi. Saepe soluta vero repellat a?
                Nobis iusto aspernatur quidem a? Nobis, reiciendis magni? Alias ratione accusamus corrupti similique nemo obcaecati ab officia neque voluptatibus, reprehenderit, inventore quos, commodi error facilis. Sunt consectetur excepturi necessitatibus temporibus.
                Velit molestias rem in corrupti. Fuga distinctio tempore sunt temporibus quisquam delectus numquam iste officia neque deserunt expedita ipsa, sequi, quidem facere, possimus dolorem incidunt beatae reprehenderit quam atque explicabo!
                Esse, recusandae aliquam. Ab officia pariatur voluptate iure laudantium aspernatur, voluptas praesentium ipsam. Tenetur, quod! Officiis sint eligendi, laudantium sed cum nam rerum voluptatem dolorem eum optio at. Impedit, suscipit!
                Quasi laboriosam perspiciatis quis similique vel autem architecto deserunt et, nesciunt laborum, error nisi ab, minima consequatur. Fugiat ipsa porro facere dolorum nihil! Beatae omnis a qui. Aliquid, facere! Ullam.
                Numquam, rerum! Nemo nulla, rem eum expedita, illum ab voluptatibus asperiores cupiditate ducimus impedit nisi soluta perspiciatis fuga iure at, sequi reiciendis voluptates sed cum exercitationem facere ipsam sit! Asperiores.</p>
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
    );
};

export default TeamDetails; <p>This is team details</p>