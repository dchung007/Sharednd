import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import { useHistory, useParams } from "react-router-dom";
import { differenceInCalendarDays, differenceInDays, format } from 'date-fns';
import { useDispatch, useSelector } from "react-redux";
import { addBooking, getSpotBookings } from "../../store/bookings";
import 'react-calendar/dist/Calendar.css';
import './CreateBooking.css'

const CreateBooking = ({ spot }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();
  const [date, setDate] = useState(null);
  const [errors, setErrors] = useState([]);
  const spotBookings = useSelector(state => state.bookings);
  // console.log(date)

  useEffect(() => {
    dispatch(getSpotBookings(spotId))
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
      const finalPrice = differenceInDays(date[1], date[0]) * spot.price;

      // console.log(format(date[0], 'yyyy-MM-dd'));
      // console.log(format(date[1], 'yyyy-MM-dd'));

      const newBooking = {
        spotId,
        startDate: format(date[0], 'yyyy-MM-dd'),
        endDate: format(date[1], 'yyyy-MM-dd'),
        price: finalPrice
      }

      let createdBooking = await dispatch(addBooking(newBooking))
      if (createdBooking.newBooking) {
        history.push(`/users/${createdBooking.newBooking.userId}/profile`)
      } else {
        setErrors(createdBooking)
      }
    }
  }

  return (
    <div className="create-booking-container">
      <h1>Create A Booking!</h1>
      <form onSubmit={handleSubmit}>
        <div className='errors-list-booking-form'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="create-booking-button">
          <button className="create-booking-button" type="submit">Reserve</button>
        </div>
        <div className="calendar">
          <Calendar
            // value={date}
            onChange={setDate}
            allowPartialRange={true}
            selectRange={true}
            tileDisabled={tileDisabled}
          />
        </div>
      </form>
    </div>
  )
}

export default CreateBooking;
