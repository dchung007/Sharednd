const LOAD_SPOTS = 'spots/LOAD_SPOTS';
const ADD_SPOT = 'spots/ADD_SPOT';
const EDIT_SPOT = 'spots/EDIT_SPOT';
const DELETE_SPOT = 'spots/DELETE_SPOT';

const actionLoadSpots = (spots) => ({
  type: LOAD_SPOTS,
  spots
});

const actionAddSpot = (newSpot) => ({
  type: ADD_SPOT,
  newSpot
});

const actionEditSpot = (editedSpot) => ({
  type: EDIT_SPOT,
  editedSpot
});

const actionDeleteSpot = (spotId) => ({
  type: DELETE_SPOT,
  spotId
});

export const getSpots = () => async (dispatch) => {
  const response = await fetch(`/api/spots/all`);

  if (response.ok) {
    const spots = await response.json();
    dispatch(actionLoadSpots(spots));
    return spots;
  }
}

export const addSpot = (spot) => async (dispatch) => {
  const response = await fetch(`/api/spots/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      spot
    })
  });

  if (response.ok) {
    const newSpot = await response.json();
    dispatch(actionAddSpot(newSpot));
    return newSpot;
  }
}

export const editSpot = (spot) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spot.id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      spot
    })
  });

  if (response.ok) {
    const editedSpot = await response.json();
    dispatch(actionEditSpot(editedSpot));
    return editedSpot;
  }
}

export const deleteSpot = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}/delete`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(actionDeleteSpot(spotId));
  }
}

const spotsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPOTS:
      const newState1 = {};
      action.spots.spots.forEach(spot => {
        newState1[spot.id] = spot;
      });
      return newState1;
      
    default:
      return state;
  }
}

export default spotsReducer;
