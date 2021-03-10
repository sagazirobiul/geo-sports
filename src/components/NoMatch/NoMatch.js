import React from 'react';
import imgUrl from '../../images/ontFound.png'

const NoMatch = () => {
    return (
        <div className="notMatch">
            <img src={`${imgUrl}`}  alt="404"/>
        </div>
    );
};

export default NoMatch;