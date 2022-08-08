import { useState } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { deleteBooking } from "../../store/bookings";
import EditBooking from "../EditBooking";


const BookingDetails = ({ booking }) => {
  const dispatch = useDispatch()
  const [showEditBooking, setShowEditBooking] = useState();

  const newStartDate = format(new Date(booking.startDate), 'MMM dd');
  const newEndDate = format(new Date(booking.endDate), 'MMM dd, yyyy')

  const handleDelete = async (bookingId) => {
    let booking = await dispatch(deleteBooking(bookingId))

    if (booking) {
      console.log('booking deleted!')
    }
  }

  // console.log(format(booking.startDate, 'MMMM dd yyyy'))
  // console.log("Booking start date:     ", booking.startDate)


  return (
    <div>
      <div>
        <div>
          <img src={booking.spot.images[0].imageUrl}></img>
        </div>
        <div>
          <div>
            {booking.spot.city}
          </div>
          <div>
            Hosted by {booking.spot.owner.username}
          </div>
          <div>
            Dates: {newStartDate} - {newEndDate}
          </div>
        </div>
      </div>
      {
        !showEditBooking ?
          <div>
            <button onClick={() => setShowEditBooking(true)}>Edit reservation</button>
            <button onClick={() => handleDelete(booking.id)}>Remove reservation</button>
          </div>
          :
          <EditBooking booking={booking} hideForm={() => setShowEditBooking(false)} />
      }
    </div>
  )
}

export default BookingDetails;
