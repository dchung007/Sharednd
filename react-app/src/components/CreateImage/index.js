import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addImage } from "../../store/spots";


const CreateImage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();
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
    e.preventDefault();

    // Image 1 submission
    const formData1 = new FormData();
    formData1.append("spotId", spotId)
    formData1.append("image", image1);

    setImageLoading1(true);

    const createdImage1 = await dispatch(addImage(formData1));
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
    formData2.append("spotId", spotId)
    formData2.append("image", image2);

    setImageLoading2(true);

    const createdImage2 = await dispatch(addImage(formData2));
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
    formData3.append("spotId", spotId)
    formData3.append("image", image3);

    setImageLoading3(true);

    const createdImage3 = await dispatch(addImage(formData3));
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
    formData4.append("spotId", spotId)
    formData4.append("image", image4);

    setImageLoading4(true);

    const createdImage4 = await dispatch(addImage(formData4));
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
    formData5.append("spotId", spotId)
    formData5.append("image", image5);

    setImageLoading5(true);

    const createdImage5 = await dispatch(addImage(formData5));
    if (createdImage5.image) {
      setImageLoading5(false);
    }
    else {
      setImageLoading5(false);
      console.log("error5");
      setErrors5(`image5: ${createdImage5}`)
    }

    if (createdImage1.image && createdImage2.image && createdImage3.image && createdImage4.image && createdImage5.image) {
      history.push('/')
    } else {
      console.log("---------------------------------------------fail")
      setTotalErrors([errors1, errors2, errors3, errors4, errors5])
    }
  }

  return (
    <div className="image-form">
      <form onSubmit={handleSubmit} className="image-form">
        <div className='form-title'>
          <h1>
            Spot created! You're almost there...
          </h1>
          <h4>
            Upload your images
          </h4>
        </div>
        <div className='errors-list'>
          {totalErrors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
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
          <li>
            <button
              type="submit"
              className='image-button'
            >Submit</button>
          </li>
        </ul>
      </form>
      {(imageLoading1 || imageLoading2 || imageLoading3 || imageLoading4 || imageLoading5) && <p>Loading...</p>}
    </div>

  )
}

export default CreateImage;
