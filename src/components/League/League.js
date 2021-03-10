import React, { useEffect, useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import './League.css'


const League = ({leagueId, leagueName, leagueType}) => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
        .then(res => res.json())
        .then(data => setDetails(data.leagues[0]))
    }, [leagueId])
    return (
        <Col md={4} className='my-3'>
            <Card className='leagueCard'>
                <div className='card-img'>
                    <Card.Img variant="top" src={details.strBadge} />
                </div>
                <Card.Body className='text-center cardDetails'>
                    <h4>{leagueName}</h4>
                    <p>Sports type: {leagueType}</p>
                    <Button as={Link} to={`/league/${leagueId}`} className='detailsBtn btn-info'>See More<span className='nextIcon'><FontAwesomeIcon icon={faArrowCircleRight} /></span>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default League;