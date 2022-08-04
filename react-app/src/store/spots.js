const LOAD_SPOTS = 'spots/LOAD_SPOTS';
const ADD_SPOT = 'spots/ADD_SPOT';
const EDIT_SPOT = 'spots/EDIT_SPOT';
const DELETE_SPOT = 'spots/DELETE_SPOT';
const ADD_IMAGE = 'spots/ADD_IMAGE';
// const EDIT_IMAGE = 'spots/EDIT_IMAGE';
const DELETE_IMAGE = 'spots/DELETE_IMAGE';

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

const actionAddImage = (newImage) => ({
  type: ADD_IMAGE,
  newImage
})

// const actionEditImage = (editedImage) => ({
//   type: EDIT_IMAGE,
//   editedImage
// })

const actionDeleteImage = (imageId) => ({
  type: DELETE_IMAGE,
  imageId
})


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
    body: JSON.stringify(spot)
  });

  if (response.ok) {
    const newSpot = await response.json();
    dispatch(actionAddSpot(newSpot));
    console.log(newSpot)
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

export const addImage = (formData) => async (dispatch) => {
  const response = await fetch('/api/images/new', {
    method: 'POST',
    body: formData
  })

  if (response.ok) {
    const image = await response.json();
    dispatch(actionAddImage(image))
    return image
  }
  else {
    const error = await response.json();
    return error
  }
}

// export const editImage = (imageId, formData) => async (dispatch) => {
//   const response = await fetch(`/api/images/${imageId}/edit`, {
//     method: 'POST',
//     body: formData
//   })

//   if (response.ok) {
//     const image = await response.json();
//     dispatch(actionEditImage(image))
//     return image
//   }
//   else {
//     const error = await response.json();
//     return error
//   }
// }

export const deleteImage = (imageId) => async (dispatch) => {
  const response = await fetch(`/api/images/${imageId}/delete`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(actionDeleteImage(imageId));
  }
}


const spotsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPOTS:
      const newState1 = {};
      action.spots.spots.forEach(spot => {
        newState1[spot.id] = spot;
        const imageObj = {}
        spot.images.forEach(image => {
          imageObj[image.id] = image
        })
        newState1[spot.id].images = imageObj
      });
      return newState1;

    case ADD_SPOT:
      const newState2 = { ...state }
      newState2[action.newSpot.id] = action.newSpot
      return newState2;

    case EDIT_SPOT:
      const newState3 = { ...state }
      newState3[action.editedSpot.id] = action.editedSpot
      return newState3;

    case DELETE_SPOT:
      const newState4 = { ...state }
      delete newState4[action.spotId]
      return newState4;

    case ADD_IMAGE:
      const newState5 = { ...state }
      newState5[action.image.spotId].images[action.image.id] = action.image
      return newState5;

    case DELETE_IMAGE:
      const newState6 = { ...state }
      delete newState6[action.imageId]
      return newState6;

    default:
      return state;
  }
}

export default spotsReducer;
