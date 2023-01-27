import React, {useEffect, useState} from 'react';

const accessToken = '43179613111cce84d49ba4171c92163f0088573c1e513aef414a4766e41350a3';

// component to fetch and list shots form dribble api

const DribbleShots = () => {
    const [shots, setShots] = useState([]);

    useEffect(() => {
        fetch('https://api.dribbble.com/v2/user/shots?access_token=' + accessToken)
            .then(res => res.json())
            .then(data => {
                setShots(data);
            })
    }, []);

    return (
        <div className="dribble-shots">
            <h1>These are your shots</h1>
            {shots.map(shot => (
                <div className="shot" key={shot.id}>
                    <img src={shot.images.hidpi} alt={shot.title}/>
                </div>
            ))}
        </div>
    )
}

export default DribbleShots