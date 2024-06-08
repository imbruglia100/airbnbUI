import { useNavigate } from 'react-router-dom';
import house from '../../assets/house.png'
import './Spots.css'
import { FaStar } from "react-icons/fa";


const SpotCard = ({ spot }) => {
    const navigate = useNavigate()
    const handleRoute = () => {
        navigate(`/huts/${spot.id}`)
    }
    return (
        <div className="spot-card">
            <div aria-describedby='spot-name' onClick={handleRoute} className='spot-img-container'>
                <img  className='spot-img'  src={spot.previewImage || house} />
                <div role='tooltip' id='spot-name'>{spot.name}</div>
            </div>
                <div className='spot-info'>
                <div>
                    <p>{spot.city}, {spot.state}</p>
                    <p>${spot.price}/night</p>
                </div>
                <p className='spot-star-rating'>{spot.avgRating === 0 ? 'New!' : <><FaStar />{Number(spot.avgRating).toFixed(1)}</>}</p>
            </div>
        </div>
    )
}

export default SpotCard;
