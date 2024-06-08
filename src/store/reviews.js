import { csrfFetch } from './csrf';

const SET_REVIEWS = "reviews/setReviews";
const ADD_REVIEW = "reviews/addReview"
export const setReviews = (reviews) => {
  return {
    type: SET_REVIEWS,
    payload: reviews
  };
};

const addReview = (review) => {
  return {
    type: ADD_REVIEW,
    payload: review
  }
}

export const getReviewsBySpotById = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}/reviews`)

    if(response.ok){
        const spotReviews = await response.json()
        const newState = {};
        spotReviews.Reviews && spotReviews.Reviews.forEach(review => {

          newState[review.id] = review
        })
    
        dispatch(setReviews(newState))
        return newState
    }
}

export const createAReviewWithId = (id, review) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}/reviews`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  })

  if(response.ok){
      const newReview = await response.json()
      dispatch(addReview(newReview))
      return newReview
  }

  const { errors } = await response.json()
  return errors
}

// export const createASpot = (newSpot) => async (dispatch) => {
//   const response = await csrfFetch(`/api/spots`, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: newSpot
//   })

//   if(response.ok){
//       const newSpot = await response.json()

//       dispatch(setCurrentSpot(newSpot))
//       return newSpot
//   }
// }

const initialState = { reviews: null, isLoaded: false};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS:
      return { ...state, reviews: {...action.payload}, isLoaded: true };
    case ADD_REVIEW:
      return {...state, reviews: {...state.reviews, [action.payload.id]: action.payload}}
    default:
      return state;
  }
};

export default reviewsReducer;
