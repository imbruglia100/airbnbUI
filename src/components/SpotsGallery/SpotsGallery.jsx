/** @format */

import { useDispatch, useSelector } from "react-redux";
import "./Spots.css";
import { useEffect, useState } from "react";
import { getAllSpots } from "../../store/spots";
import SpotCard from "./SpotCard";

const SpotsGallery = () => {
  const spots = useSelector((state) => Object.values(state.spotState.spots));
  const isLoaded = useSelector((state) => state.spotState.isLoaded);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const NextPageBtns = () => (
    <div className='next-page-btns'>
      <button
        className='secondary-btn'
        increment='-'
        onClick={() => page > 1 && setPage((prev) => prev - 1)}
      >{`<`}</button>
      <p>{page}</p>
      <button
        className='secondary-btn'
        increment='+'
        onClick={() => setPage((prev) => prev + 1)}
      >{`>`}</button>
    </div>
  );

  useEffect(() => {
    const huts = dispatch(getAllSpots(page));
    huts.isLoaded && console.log(huts)
  }, [dispatch, page]);

  return (
    <>
      <NextPageBtns />
      <div className='spots-container'>
        {isLoaded ? (
          !spots.error ? (
            spots.map((spot) => <SpotCard spot={spot} />)
          ) : (
            <h1>{spots.error}</h1>
          )
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <NextPageBtns />
    </>
  );
};
export default SpotsGallery;
