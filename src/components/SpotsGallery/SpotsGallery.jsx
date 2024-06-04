import { useDispatch, useSelector } from 'react-redux';
import './Spots.css'
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotCard from './SpotCard';

const SpotsGallery = () => {
    const spots = useSelector(state=> state.spotState.spots ? Object.values(state.spotState.spots) : [])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllSpots())
    }, [])
    return (
    <div className='spots-container'>
        {spots.length > 0 && spots.map(spot => <SpotCard spot={spot} />)}
    </div>
    )
}
export default SpotsGallery;
