import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editSpot } from "../../store/spots";

const EditSpot = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    const spot = {
      id: spotId,
      name,
      price,
      description
    }

    let editedSpot = await dispatch(editSpot(spot))
    if (editedSpot) {
      history.push(`/spots/${spotId}`)
    }
  }

  return (
    <div>
      <h1>Edit form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:<span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">
            Price:<span className="required">*</span>
          </label>
          <input
            id="price"
            name="price"
            type="text"
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">
            Description:<span className="required">*</span>
          </label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
          >Submit</button>
        </div>
      </form>
    </div>

  )
}

export default EditSpot;
