import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking, getUserBookings } from "../../store/bookings";
import BookingDetails from "../BookingDetails";
import EditBooking from "../EditBooking";
import './BookingsList.css'


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
      <div className="bookings-list-container">
        <div>
          <h2>Your Trips</h2>
        </div>
        <div className="bookings-list">
          {Object.values(bookings).length ?
            Object.values(bookings).map(booking => (
              <div key={booking.id}>
                {/* <button onClick={() => handleDelete(booking.id)}>Cancel reservation</button>
              <EditBooking booking={booking} /> */}
                <BookingDetails booking={booking} />
              </div>
            ))
            :
            <div className="no-bookings">
              <div>
                No Bookings yet
              </div>
              <div>
                <img className="no-bookings-image" src='https://sharedndbucket.s3.us-west-1.amazonaws.com/bookings-default-image.png' />
              </div>
            </div>

          }
        </div>
      </div>
      :
      <h3>Loading..</h3>
  )
}

export default UserBookingsList;
