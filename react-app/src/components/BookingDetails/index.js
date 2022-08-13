import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { deleteBooking } from "../../store/bookings";
import EditBooking from "../EditBooking";
import './BookingDetails.css'


const BookingDetails = ({ booking }) => {
  const dispatch = useDispatch()
  const [showEditBooking, setShowEditBooking] = useState();
  const [spotBookings, setSpotBookings] = useState('');

  const newStartDate = format(new Date(booking.startDate), 'MMM dd');
  const newEndDate = format(new Date(booking.endDate), 'MMM dd, yyyy')

  const fetchSpotBookings = () => {
    fetch(`/api/bookings/spot/${booking.spotId}/all`)
      .then(response => response.json())
      .then(data => {
        // console.log(data.bookings)
        setSpotBookings(data.bookings)
      })
  }

  useEffect(() => {
    fetchSpotBookings()
  }, [])


  const handleDelete = async (bookingId) => {
    let booking = await dispatch(deleteBooking(bookingId))

    if (booking) {
      // console.log('booking deleted!')
    }
  }

  // console.log(format(booking.startDate, 'MMMM dd yyyy'))
  // console.log("Booking start date:     ", booking.startDate)


  return (
    <div className="booking-container">
      <div>
        <img
          className="booking-image"
          src={booking.spot.images[0] ? booking.spot.images[0].imageUrl : "https://sharedndbucket.s3.us-west-1.amazonaws.com/default-image-home.png"}
          onError={(e) => { e.target.onerror = null; e.target.src = "https://sharedndbucket.s3.us-west-1.amazonaws.com/default-image-home.png" }}
        ></img>
      </div>

      {
        !showEditBooking ?
          <div className="booking-info">
            <div>
              {booking.spot.city}
            </div>
            <div>
              Hosted by {booking.spot.owner.username}
            </div>
            <div>Total price: ${booking.price}</div>
            <div>
              Dates: {newStartDate} - {newEndDate}
            </div>
            <div>
              <button className="edit-booking-button" onClick={() => setShowEditBooking(true)}>Edit reservation</button>
              <button className="edit-booking-button" onClick={() => handleDelete(booking.id)}>Remove reservation</button>
            </div>
          </div>
          :
          <EditBooking spotBookings={spotBookings} booking={booking} hideForm={() => setShowEditBooking(false)} />
      }

    </div>
  )
}

export default BookingDetails;
