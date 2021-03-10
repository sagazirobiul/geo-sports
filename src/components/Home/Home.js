import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import League from '../League/League';
import './Home.css'

const Home = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0, 30)))
    }, [])
    return (
        <>
        <div className='banner'>
            <h2><span className='highlight'>GEO</span> SPORTS</h2>
        </div>
        <div className="container">
            <Row>
                {
                    leagues.map(({idLeague, strLeague, strSport}) =>
                    <League
                        key={idLeague}
                        leagueId={idLeague}
                        leagueName={strLeague}
                        leagueType={strSport}
                    />)
                }
            </Row>
        </div>
        </>
    );
};

export default Home;