import { csrfFetch } from './csrf';

const SET_SPOTS = "spots/setSpots";
const SET_CURRENT = "spots/setCurrentSpot";
const ADD_SPOT = "spots/addSpot";

const setSpots = (spots) => {
  return {
    type: SET_SPOTS,
    payload: spots
  };
};

const setCurrentSpot = (spot) => {
    return {
        type: SET_CURRENT,
        payload: spot
    }
}

const addSpot = (spot) => {
  return {
      type: ADD_SPOT,
      payload: spot
  }
}

export const getAllSpots = (page) => async (dispatch) => {
    const response = page ? await csrfFetch(`/api/spots?page=${page}`) : await csrfFetch(`/api/spots`)

    if(response.ok){
        const { Spots } = await response.json()
        const newState = {}

        Spots.forEach(spot => {

          newState[spot.id] = spot
        })

        dispatch(setSpots(newState))
        return newState
    }
    return {error: "Unable to retrieve spots. Please try again shortly"}
}

export const getSpotById = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`)

    if(response.ok){
        const spot = await response.json()

        dispatch(setCurrentSpot(spot))
        return spot
    }

    return {error: "Unable to retrieve details."}
}


export const createASpot = (newSpot) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...newSpot})
  })

  if(response.ok){
      const newSpot = await response.json()

      dispatch(addSpot(newSpot))
      return newSpot
  }
}



const initialState = { spots: { error: null }, isLoaded:false, current: { isLoaded: false, error: null }};

const spotsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_SPOTS:
      return { ...state, spots: {...action.payload }, isLoaded: true };
    case SET_CURRENT:
      return { ...state, current: {...action.payload, avgStarRating: Number(action.payload.avgStarRating).toFixed(1) , isLoaded: true} };
    case ADD_SPOT:
      return { ...state, spots: {...state.spots, [action.payload.id]: action.payload} };
    default:
      return state;
  }
};

export default spotsReducer;
