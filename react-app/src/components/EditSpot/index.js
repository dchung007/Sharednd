import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editSpot } from "../../store/spots";
import './EditSpot.css'

const EditSpot = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const spot = {
      id: spotId,
      name,
      price,
      description
    }

    let editedSpot = await dispatch(editSpot(spot))
    if (editedSpot.editedSpot) {
      history.push(`/spots/${spotId}`)
    } else {
      setErrors(editedSpot)
    }
  }

  return (
    <div className="create-spot-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className='form-title'>
          <h1>
            Update your spot now!
          </h1>
        </div>
        <ul className="signup-form-list">
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
              className="field-signup"
              id="name"
              name="name"
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="price">
              Price:<span className="required">*</span>
            </label>
            <input
              className="field-signup"
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
              className="field-signup"
              id="description"
              name="description"
              type="text"
              onChange={e => setDescription(e.target.value)}
            />
          </li>
          <li>
            <button
            className="signup-button"
              type="submit"
            >Submit</button>
          </li>
        </ul>
      </form>
    </div>

  )
}

export default EditSpot;
