const LOAD_SPOTS = 'spots/LOAD_SPOTS';
const LOAD_ONE_SPOT = 'spots/LOAD_ONE_SPOT';
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

const actionLoadOneSpot = (spot) => ({
  type: LOAD_ONE_SPOT,
  spot
})

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

export const getOneSpot = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}`);

  if (response.ok) {
    const spot = await response.json();
    dispatch(actionLoadOneSpot(spot));
    return spot;
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
    return newSpot;
  }
}

export const editSpot = (spot) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spot.id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(spot)
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
    const deletedSpot = await response.json();
    dispatch(actionDeleteSpot(spotId));
    return deletedSpot;
  }
}

export const addImage = (formData) => async (dispatch) => {
  const response = await fetch('/api/images/new', {
    method: 'POST',
    body: formData
  })

  // console.log("--------------------------", "responseeee", response.ok, "--------------------------------")
  if (response.ok) {
    const image = await response.json();
    dispatch(actionAddImage(image))
    // console.log("-------------------Reached reponse.ok backend:", image, "-------------------")
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
    return imageId;
  }
}


const spotsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPOTS:
      const newState1 = {};
      action.spots.spots.forEach(spot => {
        newState1[spot.id] = spot;
        const imageObj1 = {}
        spot.images.forEach(image => {
          imageObj1[image.id] = image
        })
        newState1[spot.id].images = imageObj1
      });
      return newState1;

    case LOAD_ONE_SPOT:
      const newState2 = {};
      newState2[action.spot.id] = action.spot
      const imageObj2 = {}
      action.spot.images.forEach(image => {
        imageObj2[image.id] = image
      })
      newState2[action.spot.id].images = imageObj2
      return newState2;

    case ADD_SPOT:
      const newState3 = { ...state }
      newState3[action.newSpot.id] = action.newSpot
      return newState3;

    case EDIT_SPOT:
      const newState4 = { ...state }
      newState4[action.editedSpot.id] = action.editedSpot
      return newState4;

    case DELETE_SPOT:
      const newState5 = { ...state }
      delete newState5[action.spotId]
      return newState5;

    case ADD_IMAGE:
      const newState6 = { ...state }
      if (newState6[action.newImage.spotId].images) {
        newState6[action.newImage.spotId].images[action.newImage.id] = action.newImage
      } else {
        newState6[action.newImage.spotId].images = {}
        newState6[action.newImage.spotId].images[action.newImage.id] = action.newImage
      }
      return newState6;

    case DELETE_IMAGE:
      const newState7 = { ...state }
      delete newState7[action.imageId]
      return newState7;

    default:
      return state;
  }
}

export default spotsReducer;
