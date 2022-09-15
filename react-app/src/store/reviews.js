const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const actionLoadReviews = (reviews) => ({
  type: LOAD_REVIEWS,
  reviews
})

const actionAddReview = (newReview) => ({
  type: ADD_REVIEW,
  newReview
})

const actionEditReview = (editedReview) => ({
  type: EDIT_REVIEW,
  editedReview
})

const actionDeleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId
})

export const getSpotReviews = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/spot/${spotId}/all`);

  if (response.ok) {
    const reviews = await response.json()
    dispatch(actionLoadBookings(reviews))
    return reviews
  }
}

export const addReview = (review) => async (dispatch) => {
  const response = await fetch(`/api/reviews/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  });

  if (response.ok) {
    const review = await response.json()
    dispatch(actionAddBooking(review))
    return { 'newReview': review }
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const editReview = (review) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${review.id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  });

  if (response.ok) {
    const review = await response.json()
    dispatch(actionEditBooking(review))
    return { 'editedReview': review }
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const deleteBooking = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}/delete`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(actionDeleteReview(reviewId))
    return reviewId
  }
}

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_REVIEWS:
      const newState1 = {};
      action.reviews.reviews.forEach(review => {
        newState1[review.id] = review
      });
      return newState1;

    case ADD_REVIEW:
      const newState2 = { ...state };
      newState2[action.newReview.id] = action.newReview
      return newState2;

    case EDIT_REVIEW:
      const newState3 = { ...state };
      newState3[action.editedReview.id] = action.editedReview
      return newState3;

    case DELETE_REVIEW:
      const newState4 = { ...state };
      delete newState4[action.reviewId]
      return newState4;

    default:
      return state;
  }
}


export default reviewsReducer;
