import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { editSpot, getSpots } from "../../store/spots";
import './EditSpot.css'

const EditSpot = () => {
  const location = useLocation();
  const spot = location.state?.spot;
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  // const spots = useSelector(state => state.spots);
  // const spot = spots[spotId];
  const [name, setName] = useState(spot.name);
  const [price, setPrice] = useState(spot.price);
  const [description, setDescription] = useState(spot.description);
  const [errors, setErrors] = useState([])

  // useEffect(() => {
  //   dispatch(getSpots())
  // }, [dispatch, spot])



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
              value={name}
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
              value={price}
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
              value={description}
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
