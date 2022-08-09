import { useState } from "react";
import Calendar from 'react-calendar';
import { useParams } from "react-router-dom";
import { differenceInCalendarDays, differenceInDays, format } from 'date-fns';
import { useDispatch } from "react-redux";
import { addBooking } from "../../store/bookings";
import 'react-calendar/dist/Calendar.css';
import './CreateBooking.css'

const CreateBooking = ({ spot }) => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const [date, setDate] = useState(new Date());
  console.log(date)


  const isSameDay = (a, b) => {
    return differenceInCalendarDays(a, b) === 0;
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSameDay(date[0], date[1]) || !Array.isArray(date)) {
      alert("Please select an endDate!")
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
    if (createdBooking) {
      console.log('success!')
    }

  }

  return (
    <div className="create-booking-container">
      <h1>Create A Booking!</h1>
      <form onSubmit={handleSubmit}>
        <div className="calendar">
          <Calendar
            value={date}
            onChange={setDate}
            selectRange={true}
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
