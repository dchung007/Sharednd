import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBooking } from "../../store/bookings";
import EditBooking from "../EditBooking";


const BookingDetails = ({ booking }) => {
  const dispatch = useDispatch()
  const [showEditBooking, setShowEditBooking] = useState();


  const handleDelete = async (bookingId) => {
    let booking = await dispatch(deleteBooking(bookingId))

    if (booking) {
      console.log('booking deleted!')
    }
  }

  return (
    <div>
      <div>
        Dates: {booking.startDate}-{booking.endDate}
      </div>
      <div>
        Price: ${booking.price}
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
