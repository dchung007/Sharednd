import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking, getUserBookings } from "../../store/bookings";
import EditBooking from "../EditBooking";


const UserBookingsList = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const bookings = useSelector(state => state.bookings)

  useEffect(() => {
    dispatch(getUserBookings(sessionUser?.id))
  }, [dispatch])

  // console.log(Object.values(bookings))

  const handleDelete = async (bookingId) => {
    let booking = await dispatch(deleteBooking(bookingId))

    if (booking) {
      console.log('booking deleted!')
    }
  }

  return (
    bookings ?
      <div>
        <h2>Bookings List for {sessionUser.name}</h2>
        {Object.values(bookings).map(booking => (
          <div key={booking.id}>
            <div>
              Dates: {booking.startDate}-{booking.endDate}
            </div>
            <div>
              Price: ${booking.price}
            </div>
            <div>
              <button onClick={() => handleDelete(booking.id)}>Cancel reservation</button>
              <EditBooking booking={booking} />
            </div>
          </div>
        ))}
      </div>
      :
      <h3>Loading..</h3>
  )
}

export default UserBookingsList;
