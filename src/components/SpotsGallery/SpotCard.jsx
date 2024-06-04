import { useEffect } from 'react';
import house from '../../assets/house.png'
import './Spots.css'
import { FaStar } from "react-icons/fa";


const SpotCard = ({ spot }) => {

    return (
        <div className="spot-card">
            <div aria-describedby='spot-name' className='spot-img-container'>
                <img className='spot-img'  src={spot.previewImage || house} />
                <div role='tooltip' id='spot-name'>{spot.name}</div>
            </div>
                <div className='spot-info'>
                <div>
                    <p>{spot.city}, {spot.state}</p>
                    <p>${spot.price}/night</p>
                </div>
                <p className='spot-star-rating'><FaStar />{spot.avgRating}</p>
            </div>
        </div>
    )
}

export default SpotCard;
