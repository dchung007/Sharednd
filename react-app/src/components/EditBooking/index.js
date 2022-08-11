import { useState } from "react";
import Calendar from 'react-calendar';
import { useParams } from "react-router-dom";
import { differenceInCalendarDays, differenceInDays, format } from 'date-fns';
import { useDispatch } from "react-redux";
import { addBooking, editBooking } from "../../store/bookings";
import 'react-calendar/dist/Calendar.css';
import './EditBooking.css'

const EditBooking = ({ booking, hideForm }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  // console.log(date)



  const isSameDay = (a, b) => {
    return differenceInCalendarDays(a, b) === 0;
  }

  const handleCancel = (e) => {
    e.preventDefault();
    hideForm();
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(date)
    if (isSameDay(date[0], date[1]) || !Array.isArray(date)) {
      alert("Please select an endDate!")
      return;
    }

    // if (date.length > 2) {
    //   alert("Please select a date")
    //   return;
    // }

    const finalPrice = differenceInDays(date[1], date[0]) * booking.spot.price;

    console.log(finalPrice)

    // console.log(format(date[0], 'yyyy-MM-dd'));
    // console.log(format(date[1], 'yyyy-MM-dd'));

    const editedBooking = {
      id: booking.id,
      spotId: booking.spotId,
      startDate: format(date[0], 'yyyy-MM-dd'),
      endDate: format(date[1], 'yyyy-MM-dd'),
      price: finalPrice
    }

    let updatedBooking = await dispatch(editBooking(editedBooking))
    if (updatedBooking) {
      console.log('edit was successful!')
    }

  }

  return (
    <div>
      <h1>Edit A Booking!</h1>
      <form onSubmit={handleSubmit}>
        <button className="edit-booking-button" type="submit">Update Reservation</button>
        <button className="edit-booking-button" type="button" onClick={handleCancel}>Cancel</button>
        <div>
          <Calendar
            value={date}
            onChange={setDate}
            selectRange={true}
          />
        </div>
      </form>
    </div>
  )
}

export default EditBooking;
