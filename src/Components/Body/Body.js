import React, { useEffect, useState } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import './Body.css';

const Body = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])


    return (
        <div className="container mt-5">
            <div className="banner">
                <br/><br/><br/><br/><br/>
                <h1>Team Tracker</h1>
            </div>
            <div className="row">
                {
                    team.map(team => <TeamCard bodyToCard={team}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Body; <h1>This is body</h1>