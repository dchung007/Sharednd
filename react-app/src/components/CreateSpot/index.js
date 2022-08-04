import { useState } from "react";
import { useDispatch } from "react-redux";


const CreateSpot = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:<span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">
            Name:<span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">
            Name:<span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">
            Name:<span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">
            Name:<span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">
            Name:<span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">
            Name:<span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  )
}
