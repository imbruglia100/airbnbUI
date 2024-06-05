import { useDispatch, useSelector } from 'react-redux';
import './Spots.css'
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotCard from './SpotCard';

const SpotsGallery = () => {
    const spots = useSelector(state=> Object.values(state.spotState.spots))
    const isLoaded = useSelector(state=>state.spotState.spots.isLoaded)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllSpots())
    }, [])
    return (
    <div className='spots-container'>
        { isLoaded ?
            !spots.error ?
                spots.map(spot => <SpotCard spot={spot} />) :
                <h1>{spots.error}</h1> :
                <h1>Loading...</h1>
        }
    </div>
    )
}
export default SpotsGallery;
