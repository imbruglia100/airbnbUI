/** @format */

import { useParams } from "react-router-dom";
import "./SpotDetailPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotById } from "../../store/spots";
import { FaStar } from "react-icons/fa";
import photo from '../../assets/house.png'

const SpotDetailPage = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();

  const current = useSelector((state) => state.spotState.current);
    console.log(current)
  useEffect(() => {
    dispatch(getSpotById(spotId));
  }, [dispatch, spotId]);

  return (
    current?.name ? <div className="spot-detail-container">
      <h1>{current.name}</h1>
      <h3>{`${current.city}, ${current.state}, ${current.country}`}</h3>

      <div className="img-container">
        <img className="main-preview-img" src={photo} />

        <div className="img-small-container">
            {current.SpotImages.map((img, i) =>{

                if(i < 3){
                    return (
                            <img key={img.id} src={img.url} />
                    ) //temp
                }
            })}
            {/* <img  src={photo} />
            <img  src={photo} /> */}


        </div>
      </div>

      <div className="spot-info-container">
        <div className="spot-info">
            <h2>{`Hosted by ${current.Owner.firstName} ${current.Owner.lastName}`}</h2>
            <p>{current.description}</p>
        </div>

        <div className="spot-reserve-container">
            <div className="spot-reserve-card">
                <div className="spot-reserve-info">
                    <p className="spot-price"><span>{`$${current.price}`}</span>night</p>
                    <div className="spot-reserve-review-info">
                        <div><FaStar />{current.avgStarRating}</div>
                        •
                        <div>{current.numReviews} reviews</div>
                    </div>
                </div>
                    <button className="primary-btn" onClick={() => console.alert("Feature Coming Soon..")}>Reserve</button>
            </div>
        </div>
      </div>

      <div>reviews</div>
    </div> : <h1>Loading</h1>
  );
};

export default SpotDetailPage;
