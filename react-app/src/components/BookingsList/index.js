import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking, getUserBookings } from "../../store/bookings";
import BookingDetails from "../BookingDetails";
import EditBooking from "../EditBooking";


const UserBookingsList = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const bookings = useSelector(state => state.bookings)

  useEffect(() => {
    dispatch(getUserBookings(sessionUser?.id))
  }, [dispatch])

  // console.log(Object.values(bookings))

  return (
    bookings ?
      <div>
        <h2>Bookings List for {sessionUser.name}</h2>
        {Object.values(bookings).map(booking => (
          <div key={booking.id}>
            <div>
              {/* <button onClick={() => handleDelete(booking.id)}>Cancel reservation</button>
              <EditBooking booking={booking} /> */}
              <BookingDetails booking={booking}/>
            </div>
          </div>
        ))}
      </div>
      :
      <h3>Loading..</h3>
  )
}

export default UserBookingsList;
