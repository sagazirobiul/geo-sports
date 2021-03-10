import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css'
import malePic from '../../images/male.png'
import femalePic from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faFutbol, faMars, faFlag} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"

const LeagueDetails = () => {
    const {id} = useParams();
    const [leagueDetails, setLeagueDetails] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
        .then(res => res.json())
        .then(data => setLeagueDetails(data.leagues[0]))
    }, [id])
    const {dateFirstEvent, strGender, strLeague, strCountry, strSport, strBadge, strDescriptionEN, strDescriptionES, strTwitter, strYoutube, strFacebook} = leagueDetails;
    return (
        <div className='leagueDetails'>
            <div className='banner'>
                <img src={strBadge} alt="Banner"/>
            </div>
            <div className='container'>
                <div className="row details">
                    <div className='col-md-8'>
                        <div className='leagueName'>
                            <h3>{strLeague}</h3>
                        </div>
                        <p><span className='iconDesign'><FontAwesomeIcon icon={faMapPin} /></span>Founded: {dateFirstEvent}</p>
                        <p><span className='iconDesign'><FontAwesomeIcon icon={faFlag} /></span>Country: {strCountry}</p>
                        <p><span className='iconDesign'><FontAwesomeIcon icon={faFutbol} /></span>Sports Type: {strSport}</p>
                        <p><span className='iconDesign'><FontAwesomeIcon icon={faMars} /></span>Gender: {strGender}</p>
                    </div>
                    <div className="playersPic col-md-4">
                        <img src={strGender === 'Male'? `${malePic}`: `${femalePic}`} alt="dss"/>
                    </div>
                </div>
                <div className="description">
                    <p>{strDescriptionEN}</p>
                    <p className='my-4'>{strDescriptionES}</p>
                </div>
                <div className="socialLink text-center ">
                    <a href={`https://${strTwitter}`} target='_blank'>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                    </a>
                    <a href={`https://${strFacebook}`} target='_blank'>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                    </a>
                    <a href={`https://${strYoutube}`} target='_blank'>
                        <li><FontAwesomeIcon icon={faYoutube} /></li>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;