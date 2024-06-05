import { csrfFetch } from './csrf';

const SET_REVIEWS = "reviews/setReviews";

const setReviews = (reviews) => {
  return {
    type: SET_REVIEWS,
    payload: reviews
  };
};

export const getReviewsBySpotById = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}/reviews`)

    if(response.ok){
        const spotReviews = await response.json()

        dispatch(setReviews(spotReviews))
        return spotReviews
    }
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



const initialState = { spots: null, current: null};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTS:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};

export default reviewsReducer;
