const LOAD_USER_BOOKINGS = 'bookings/LOAD_USER_BOOKINGS'
const LOAD_SPOT_BOOKINGS = 'bookings/LOAD_SPOT_BOOKINGS'
const ADD_BOOKING = 'bookings/ADD_BOOKING'
const EDIT_BOOKING = 'bookings/EDIT_BOOKING'
const DELETE_BOOKING = 'bookings/DELETE_BOOKING'

const actionLoadUserBookings = (bookings) => ({
  type: LOAD_USER_BOOKINGS,
  bookings
})

const actionLoadSpotBookings = (bookings) => ({
  type: LOAD_SPOT_BOOKINGS,
  bookings
})

const actionAddBooking = (newBooking) => ({
  type: ADD_BOOKING,
  newBooking
})

const actionEditBooking = (editedBooking) => ({
  type: EDIT_BOOKING,
  editedBooking
})

const actionDeleteBooking = (bookingId) => ({
  type: DELETE_BOOKING,
  bookingId
})

export const getUserBookings = (userId) => async (dispatch) => {
  const response = await fetch(`/api/bookings/user/${userId}/all`);

  if (response.ok) {
    const bookings = await response.json()
    dispatch(actionLoadUserBookings(bookings))
    return bookings
  }
}

export const getSpotBookings = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/bookings/spot/${spotId}/all`);

  if (response.ok) {
    const bookings = await response.json()
    dispatch(actionLoadSpotBookings(bookings))
    return bookings
  }
}

export const addBooking = (booking) => async (dispatch) => {
  const response = await fetch(`/api/bookings/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(booking)
  });

  if (response.ok) {
    const booking = await response.json()
    dispatch(actionAddBooking(booking))
    return { 'newBooking': booking }
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const editBooking = (booking) => async (dispatch) => {
  const response = await fetch(`/api/bookings/${booking.id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(booking)
  });

  if (response.ok) {
    const booking = await response.json()
    dispatch(actionEditBooking(booking))
    return booking
  }
}

export const deleteBooking = (bookingId) => async (dispatch) => {
  const response = await fetch(`/api/bookings/${bookingId}/delete`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(actionDeleteBooking(bookingId))
    return bookingId
  }
}


const bookingsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USER_BOOKINGS:
      const newState1 = { userBookings: {} };
      action.bookings.bookings.forEach(booking => {
        newState1.userBookings[booking.id] = booking
      });
      return newState1;

    case LOAD_SPOT_BOOKINGS:
      const newState2 = { spotBookings: {} };
      action.bookings.bookings.forEach(booking => {
        newState2.spotBookings[booking.id] = booking
      });
      return newState2;

    case ADD_BOOKING:
      const newState3 = { ...state };
      if (Object.values(newState3.userBookings).length) {
        newState3.userBookings[action.newBooking.id] = action.newBooking
      }
      if (Object.values(newState3.spotBookings).length) {
        newState3.spotBookings[action.newBooking.id] = action.newBooking
      }
      return newState3;

    case EDIT_BOOKING:
      const newState4 = { ...state };
      if (Object.values(newState3.userBookings).length) {
        newState4.userBookings[action.editedBooking.id] = action.editedBooking
      }
      if (Object.values(newState3.spotBookings).length) {
        newState4.spotBookings[action.editedBooking.id] = action.editedBooking
      }
      return newState4;

    case DELETE_BOOKING:
      const newState5 = { ...state };
      if (Object.values(newState3.userBookings).length) {
        delete newState5.userBookings[action.bookingId]
      }
      if (Object.values(newState3.spotBookings).length) {
        delete newState5.spotBookings[action.bookingId]
      }
      return newState5;

    default:
      return state;
  }
}


export default bookingsReducer;
