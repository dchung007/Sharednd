import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSpot } from "../../store/spots";
import { useHistory } from "react-router-dom";


const CreateSpot = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newSpot = {
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-title'>
          <h1>
            Host your home now!
          </h1>
        </div>
        <div className='errors-list'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
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
          <label htmlFor="address">
            Address:
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="111 Smith Ave"
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city">
            City:<span className="required">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={e => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="state">
            State/Province:
          </label>
          <input
            id="state"
            name="state"
            type="text"
            onChange={e => setState(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country">
            Country:<span className="required">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            onChange={e => setCountry(e.target.value)}
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

export default CreateSpot;
