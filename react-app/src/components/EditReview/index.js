import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editReview } from "../../store/reviews";
import './EditReview.css'

const EditReview = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fixedReview = {
      rating,
      review
    }

    let editedReview = await dispatch(editReview(fixedReview))
    if (editedReview.review) {
      history.push(`/spots/${createdSpot.newSpot.id}/reviews/new`)
    } else {
      setErrors(editedReview)
    }
  }


  return (
    <div className="create-spot-container">
      <form className='create-spot-form' onSubmit={handleSubmit}>
        <div className='form-title'>
          <h1>
            How was your stay?
          </h1>
        </div>
        <ul className='create-spot-form-list'>
          <div className='errors-list'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <li>
            <label htmlFor="name">
              Name:<span className="required">*</span>
            </label>
            <input
              className="field-create-spot"
              id="name"
              name="name"
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="rating">
              Rating:<span className="required">*</span>
            </label>
            <select
              className="field-create-spot"
              id="rating"
              name="rating"
              onChange={e => setRating(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="review">
              Review:<span className="required">*</span>
            </label>
            <input
              className="field-create-spot"
              id="review"
              name="review"
              type="text"
              onChange={e => setReview(e.target.value)}
            />
          </li>
          <li>
            <button
              className="create-spot-button"
              type="submit"
            >Submit</button>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default EditReview;
