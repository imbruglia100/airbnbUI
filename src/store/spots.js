import { useDispatch } from 'react-redux';
import { csrfFetch } from './csrf';

const SET_SPOTS = "spots/setSpots";


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

export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots')

    if(response.ok){
        const spots = await response.json()

        dispatch(setSpots(spots))
        return spots
    }
}

export const getSpotById = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`)

    if(response.ok){
        const spot = await response.json()

        dispatch(setCurrentSpot(spot))
        return spot
    }
}



const initialState = { spots: null, current: null};

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTS:
      return { ...state, spots: action.spots };
    default:
      return state;
  }
};

export default spotsReducer;
