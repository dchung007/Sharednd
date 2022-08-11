import { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage, addSpot } from "../../store/spots";
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
  const [totalErrors, setTotalErrors] = useState([]);
  const [errors1, setErrors1] = useState([]);
  const [errors2, setErrors2] = useState([]);
  const [errors3, setErrors3] = useState([]);
  const [errors4, setErrors4] = useState([]);
  const [errors5, setErrors5] = useState([]);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [imageLoading1, setImageLoading1] = useState(false);
  const [imageLoading2, setImageLoading2] = useState(false);
  const [imageLoading3, setImageLoading3] = useState(false);
  const [imageLoading4, setImageLoading4] = useState(false);
  const [imageLoading5, setImageLoading5] = useState(false);

  const updateImage1 = (e) => {
    const file = e.target.files[0];
    setImage1(file);
  }

  const updateImage2 = (e) => {
    const file = e.target.files[0];
    setImage2(file);
  }

  const updateImage3 = (e) => {
    const file = e.target.files[0];
    setImage3(file);
  }

  const updateImage4 = (e) => {
    const file = e.target.files[0];
    setImage4(file);
  }

  const updateImage5 = (e) => {
    const file = e.target.files[0];
    setImage5(file);
  }


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

    let createdImage1;
    let createdImage2;
    let createdImage3;
    let createdImage4;
    let createdImage5;

    let createdSpot = await dispatch(addSpot(newSpot))
    if (createdSpot.newSpot) {
      // history.push(`/spots/${createdSpot.newSpot.id}/images/new`)

      // Image 1 submission
      const formData1 = new FormData();
      formData1.append("spotId", createdSpot.newSpot.id)
      formData1.append("image", image1);

      setImageLoading1(true);

      createdImage1 = await dispatch(addImage(formData1));
      console.log(createdImage1)
      if (createdImage1.image) {
        // console.log("--------------------------------createimage frontend successful!---------------------------------------")
        setImageLoading1(false);
        // history.push("/")
      }
      else {
        // console.log("--------------------------------FAILURE!---------------------------------------")
        setImageLoading1(false);
        setErrors1(`image1: ${createdImage1}`)
      }

      // Image 2 submission
      const formData2 = new FormData();
      formData2.append("spotId", createdSpot.newSpot.id)
      formData2.append("image", image2);

      setImageLoading2(true);

      createdImage2 = await dispatch(addImage(formData2));
      if (createdImage2.image) {
        setImageLoading2(false);
      }
      else {
        setImageLoading2(false);
        // console.log("error2");
        setErrors2(`image2: ${createdImage2}`)
      }

      // Image 3 submission
      const formData3 = new FormData();
      formData3.append("spotId", createdSpot.newSpot.id)
      formData3.append("image", image3);

      setImageLoading3(true);

      createdImage3 = await dispatch(addImage(formData3));
      if (createdImage3.image) {
        setImageLoading3(false);
      }
      else {
        setImageLoading3(false);
        // console.log("error3");
        setErrors3(`image3: ${createdImage3}`)
      }

      // Image 4 submission
      const formData4 = new FormData();
      formData4.append("spotId", createdSpot.newSpot.id)
      formData4.append("image", image4);

      setImageLoading4(true);

      createdImage4 = await dispatch(addImage(formData4));
      if (createdImage4.image) {
        setImageLoading4(false);
      }
      else {
        setImageLoading4(false);
        // console.log("error4");
        setErrors4(`image4: ${createdImage4}`)
      }

      // Image 5 submission
      const formData5 = new FormData();
      formData5.append("spotId", createdSpot.newSpot.id)
      formData5.append("image", image5);

      setImageLoading5(true);

      createdImage5 = await dispatch(addImage(formData5));
      if (createdImage5.image) {
        setImageLoading5(false);
      }
      else {
        setImageLoading5(false);
        console.log("error5");
        setErrors5(`image5: ${createdImage5}`)
      }
    } else {
      setErrors(createdSpot)
    }

    if (createdSpot.newSpot && createdImage1.image && createdImage2.image && createdImage3.image && createdImage4.image && createdImage5.image) {
      history.push(`/spots/${createdSpot.newSpot.id}`)
    } else {
      console.log("---------------------------------------------fail")
      setTotalErrors([...errors, errors1, errors2, errors3, errors4, errors5])
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
          {totalErrors.map((error, ind) => (
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
        <ul className="image-form-list">
          <li>
            <label htmlFor="create-image-file-1">Image 1<span className="required">*</span>:</label>
            <input
              className="field-image"
              id="create-image-file-1"
              type="file"
              accept="image/*"
              onChange={updateImage1}
            />
          </li>
          <li>
            <label htmlFor="create-image-file-2">Image 2<span className="required">*</span>:</label>
            <input
              className="field-image"
              id="create-image-file-2"
              type="file"
              accept="image/*"
              onChange={updateImage2}
            />
          </li>
          <li>
            <label htmlFor="create-image-file-3">Image 3<span className="required">*</span>:</label>
            <input
              className="field-image"
              id="create-image-file-3"
              type="file"
              accept="image/*"
              onChange={updateImage3}
            />
          </li>
          <li>
            <label htmlFor="create-image-file-4">Image 4<span className="required">*</span>:</label>
            <input
              className="field-image"
              id="create-image-file-4"
              type="file"
              accept="image/*"
              onChange={updateImage4}
            />
          </li>
          <li>
            <label htmlFor="create-image-file-5">Image 5<span className="required">*</span>:</label>
            <input
              className="field-image"
              id="create-image-file-5"
              type="file"
              accept="image/*"
              onChange={updateImage5}
            />
          </li>
        </ul>
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
