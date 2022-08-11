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
  const [date, setDate] = useState(new Date());
  const [errors, setErrors] = useState([]);
  const spotBookings = useSelector(state => state.bookings);
  // console.log(date)

  useEffect(() => {
    dispatch(getSpotBookings(spotId))
  }, [dispatch])

  const isSameDay = (a, b) => {
    return differenceInCalendarDays(a, b) === 0;
  }

  const getDatesInRange = (startDate, endDate) => {
    const date = new Date(startDate);

    const dates = [];

    while (date <= endDate) {
      // console.log(dates)
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  const tileDisabled = ({ activeStartDate, date, view }) => {
    const disabledDates = []
    Object.values(spotBookings).forEach(booking => {
      console.log(booking)
      const dateRange = getDatesInRange(booking.startDate, booking.endDate);
      disabledDates.push(...dateRange);
    })
    console.log(disabledDates)
    return date <= new Date() || disabledDates.includes(date);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const frontErrors = [];
    if (isSameDay(date[0], date[1])) {
      frontErrors.push('Can not select same day for both start date and end date.')
    }
    if (!Array.isArray(date)) {
      frontErrors.push('Please select an end date.')
    }
    if (frontErrors.length) {
      setErrors(frontErrors)
      return;
    }

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

  return (
    <div className="create-booking-container">
      <h1>Create A Booking!</h1>
      <form onSubmit={handleSubmit}>
        <div className='errors-list'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="calendar">
          <Calendar
            value={date}
            onChange={setDate}
            selectRange={true}
            tileDisabled={tileDisabled}
          />
        </div>
        <div>
          <button type="submit">Reserve</button>
        </div>
      </form>
    </div>
  )
}

export default CreateBooking;
