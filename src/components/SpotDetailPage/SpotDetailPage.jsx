/** @format */

import { useParams } from "react-router-dom";
import "./SpotDetailPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotById } from "../../store/spots";
import { FaStar } from "react-icons/fa";
import { getReviewsBySpotById, setReviews } from "../../store/reviews";
import ReviewCard from "./ReviewCard";

const SpotDetailPage = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const {current, reviews, user} = useSelector((state) => {return {current:state.spotState.current, reviews:state.reviewState.reviews, user:state.session.user}});
  const isLoaded = useSelector(state=>state.spotState.current.isLoaded)

  const handleReview = (e) => {
    e.preventDefault()
    
  }
  useEffect(() => {
    dispatch(setReviews({}))
    dispatch(getSpotById(spotId));
    dispatch(getReviewsBySpotById(spotId))
  }, [dispatch, spotId]);
  return (
    isLoaded ?
      !current.error ?
    (<div className="spot-detail-container">
      <h1>{current.name}</h1>
      <h3>{`${current.city}, ${current.state}, ${current.country}`}</h3>

      <div className="img-container">
        <img className="main-preview-img" src={current.previewImages} />

        <div className="img-small-container">
            {current.SpotImages.map((img, i) =>{

                if(i < 3){
                    return (
                            <img key={img.id} src={img.url} />
                    ) //temp
                }
            })}
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
                        <div>{current.numReviews} {current.numReviews === 1 ? "review" : "reviews"}</div>
                    </div>
                </div>
                    <button className="primary-btn" onClick={() => alert("Feature Coming Soon..")}>Reserve</button>
            </div>
        </div>
      </div>

      {reviews &&
      <div className="reviews-container">
        <h2><FaStar /> {current.avgStarRating} {current.numReviews > 0 ? `• ${current.numReviews} ${current.numReviews === 1 ? 'review' : 'reviews'}` : 'New'}</h2>
        {user && current.Owner.id !== user.id && !Object.keys(reviews).includes(user.id) && <button onClick={handleReview} className="secondary-btn" style={{width: "fit-content", marginBottom: "25px"}}>Post Your Review</button>}
        {Object.values(reviews).length === 0 && user && current.Owner.id !== user.id ? <h3>Be the first one to post a review!</h3> : Object.values(reviews).reverse().map(review=> <ReviewCard key={review.id} review={review}/>)}
      </div> }

    </div>) : <h2>{current.error}</h2> : <h1>Loading...</h1>
  );
};

export default SpotDetailPage;
