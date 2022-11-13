import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { add } from "../../store/spots";
import './CreateReview.css'

const CreateReview = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newReview = {
      name,
      address,
      city,
      state,
      country,
      price,
      description
    }

    let createdSpot = await dispatch(addSpot(newSpot))
    if (createdSpot.newSpot) {
      history.push(`/spots/${createdSpot.newSpot.id}/images/new`)
    } else {
      setErrors(createdSpot)
    }
  }


  return (
    <div className="create-spot-container">
      <form className='create-spot-form' onSubmit={handleSubmit}>
        <div className='form-title'>
          <h1>
            Host your home now!
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
            <label htmlFor="address">
              Address:
            </label>
            <input
              className="field-create-spot"
              id="address"
              name="address"
              type="text"
              placeholder="111 Smith Ave"
              onChange={e => setAddress(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="city">
              City:<span className="required">*</span>
            </label>
            <input
              className="field-create-spot"
              id="city"
              name="city"
              type="text"
              onChange={e => setCity(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="state">
              State/Province:
            </label>
            <input
              className="field-create-spot"
              id="state"
              name="state"
              type="text"
              onChange={e => setState(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="country">
              Country:<span className="required">*</span>
            </label>
            <input
              className="field-create-spot"
              id="country"
              name="country"
              type="text"
              onChange={e => setCountry(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="price">
              Price:<span className="required">*</span>
            </label>
            <input
              className="field-create-spot"
              id="price"
              name="price"
              type="text"
              onChange={e => setPrice(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="description">
              Description:<span className="required">*</span>
            </label>
            <input
              className="field-create-spot"
              id="description"
              name="description"
              type="text"
              onChange={e => setDescription(e.target.value)}
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

export default CreateReview;
