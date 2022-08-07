const LOAD_BOOKINGS = 'bookings/LOAD_BOOKINGS'
const ADD_BOOKING = 'bookings/ADD_BOOKING'
const EDIT_BOOKING = 'bookings/EDIT_BOOKING'
const DELETE_BOOKING = 'bookings/DELETE_BOOKING'

const actionLoadBookings = (bookings) => ({
  type: LOAD_BOOKINGS,
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

export const getSpotBookings = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/bookings/spot/${spotId}/all`);

  if (response.ok) {
    const bookings = await response.json()
    dispatch(actionLoadBookings(bookings))
    return bookings
  }
}

export const getUserBookings = (userId) => async (dispatch) => {
  const response = await fetch(`/api/bookings/user/${userId}/all`);

  if (response.ok) {
    const bookings = await response.json()
    dispatch(actionLoadBookings(bookings))
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
    return booking
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
    case LOAD_BOOKINGS:
      const newState1 = {};
      action.bookings.bookings.forEach(booking => {
        newState1[booking.id] = booking
      });
      return newState1;

    case ADD_BOOKING:
      const newState2 = { ...state };
      newState2[action.newBooking.id] = action.newBooking
      return newState2;

    case EDIT_BOOKING:
      const newState3 = { ...state };
      newState3[action.editedBooking.id] = action.editedBooking
      return newState3;

    case DELETE_BOOKING:
      const newState4 = { ...state };
      delete newState4[action.bookingId]
      return newState4;

    default:
      return state;
  }
}


export default bookingsReducer;
