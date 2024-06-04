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
        const { Spots } = await response.json()
        const newState = {}

        Spots.forEach(spot => {

          newState[spot.id] = spot
        })

        dispatch(setSpots(newState))
        return newState
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
      return { ...state, spots: action.payload };
    default:
      return state;
  }
};

export default spotsReducer;
