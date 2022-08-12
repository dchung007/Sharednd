import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import { useParams } from "react-router-dom";
import { differenceInCalendarDays, differenceInDays, format } from 'date-fns';
import { useDispatch, useSelector } from "react-redux";
import { addBooking, editBooking, getSpotBookings } from "../../store/bookings";
import 'react-calendar/dist/Calendar.css';
import './EditBooking.css'

const EditBooking = ({ booking, hideForm }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [errors, setErrors] = useState([]);
  const spotBookings = useSelector(state => state.bookings);
  // console.log(date)

  useEffect(() => {
    dispatch(getSpotBookings(booking.spotId))
  }, [dispatch])

  const isSameDay = (a, b) => {
    return differenceInCalendarDays(a, b) === 0;
  }

  const checkDateInRange = (startDate, endDate, inputDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const input = new Date(inputDate);

    // console.log(startDate, endDate, inputDate)
    // console.log(inputDate >= startDate && inputDate <= endDate)
    // console.log(start, end, input)
    // console.log(input >= start && input <= end)
    if (input >= start && input <= end) {
      return true;
    } else {
      return false;
    }
  }

  const tileDisabled = ({ activeStartDate, date, view }) => {
    // const disabledDates = []
    let boolDate = false;
    Object.values(spotBookings).forEach(booking => {
      // console.log(booking)
      const validDate = checkDateInRange(booking.startDate, booking.endDate, date);
      if (validDate) {
        // disabledDates.push(date);
        boolDate = true;
      }
    })
    // console.log(disabledDates)
    return date < new Date() - 1 || boolDate
  }

  const handleCancel = (e) => {
    e.preventDefault();
    hideForm();
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(date)

    const frontErrors = [];
    if (!date) {
      frontErrors.push('No dates currently selected. Must select a date.')
      setErrors(frontErrors)
    } else if (isSameDay(date[0], date[1])) {
      frontErrors.push('Can not select same day for both start date and end date.')
      setErrors(frontErrors)
    } else if (date.length === 1) {
      frontErrors.push('Please select an end date.')
      setErrors(frontErrors)
    } else if (frontErrors.length) {
      setErrors(frontErrors)
      return;
    } else {
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

  }

  return (
    <div>
      <h1>Edit A Booking!</h1>
      <form onSubmit={handleSubmit}>
        <button className="edit-booking-button" type="submit">Update Reservation</button>
        <button className="edit-booking-button" type="button" onClick={handleCancel}>Cancel</button>
        <div>
          <Calendar
            defaultValue={[new Date(booking.startDate), new Date(booking.endDate)]}
            onChange={setDate}
            selectRange={true}
            tileDisabled={tileDisabled}
          />
        </div>
      </form>
    </div>
  )
}

export default EditBooking;
