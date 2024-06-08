/** @format */

import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
import './ReviewModal.css'
import { useDispatch } from "react-redux";
import { createAReviewWithId } from "../../store/reviews";

const AddReviewModal = ({spotId}) => {
  const [review, setReview] = useState({
    review: '',
    stars: 5
  })
const dispatch = useDispatch()
  // useEffect(() => {
  //   const starContainer= document.getElementById("star-rating-container")

  //   const starArr = Array.from(starContainer.childNodes)

  //   starContainer.addEventListener('mouseover', (e) => {
  //   e.stopPropagation()
  //   const currStar = e.target
  //   const currIndex = starArr.indexOf(currStar)
  //   if(starArr.length > 0 && starArr.includes(e.target)){
  //     starArr.forEach((star, i) => {
  //       if(i <= currIndex){
  //         star.classList.add('gold')
  //       }
  //     })
  //   }
  // })
  // }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createAReviewWithId(spotId, review))
  };
  return (
    <form className='modalForm' onSubmit={handleSubmit}>
      <h1>How was your stay?</h1>
      <div className='input-container'>
        <textarea style={{height: "100px"}} onChange={(e) => setReview(prev=> {return {...prev, review:e.target.value}})} value={review.review} placeholder='Leave your review here...' />
      </div>
      <div className='input-container'>
        {/* <div id="star-rating-container">
          <FaStar id='0'/>
          <FaStar id='1'/>
          <FaStar id='2'/>
          <FaStar id='3'/>
          <FaStar id='4'/>
        </div> */}
        <label>Star Rating</label>
          <select defaultValue={5}>
            <option onChange={() => setReview(prev => {return{...prev, stars: 1}})}>1</option>
            <option onChange={() => setReview(prev => {return{...prev, stars: 2}})}>2</option>
            <option onChange={() => setReview(prev => {return{...prev, stars: 3}})}>3</option>
            <option onChange={() => setReview(prev => {return{...prev, stars: 4}})}>4</option>
            <option onChange={() => setReview(prev => {return{...prev, stars: 5}})}>5</option>
          </select>
      </div>

      <button disabled={review.review.length < 10} className='primary-btn'>Submit your review</button>
    </form>
  );
};

export default AddReviewModal;
