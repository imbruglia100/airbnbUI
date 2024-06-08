import { useDispatch, useSelector } from 'react-redux';
import './Spots.css'
import { useEffect, useState } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotCard from './SpotCard';

const SpotsGallery = () => {
    const spots = useSelector(state=> Object.values(state.spotState.spots))
    const isLoaded = useSelector(state=>state.spotState.isLoaded)
    const dispatch = useDispatch()

    const [page, setPage] = useState(1)

    const handlePage = (e) => {
        e.preventDefault()
        const increment = e.target.attributes.increment.value
        if(increment === '+'){
            setPage(prev=>prev + 1)
        }

        if(increment === '-'){
           if(page >1){
            setPage(prev=> prev - 1)
           }
        }
    }

    const NextPageBtns = () => (
        <div className='next-page-btns'>
            <button className='secondary-btn' increment="-" onClick={handlePage}>{`<`}</button>
            <p>{page}</p>
            <button className='secondary-btn' increment="+" onClick={handlePage}>{`>`}</button>
        </div>
    );

    useEffect(() => {
        dispatch(getAllSpots(page))
    }, [dispatch, page])

    return (
        <>
            <NextPageBtns />
            <div className='spots-container'>
                { isLoaded ?
                    !spots.error ?
                        spots.map(spot => <SpotCard spot={spot} />) :
                        <h1>{spots.error}</h1> :
                        <h1>Loading...</h1>
                }
            </div>
            <NextPageBtns />
        </>
    )
}
export default SpotsGallery;
