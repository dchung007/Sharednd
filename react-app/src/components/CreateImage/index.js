import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addImage } from "../../store/spots";


const CreateImage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {spotId} = useParams();
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
    if (createdImage1) {
      console.log("--------------------------------createimage frontend successful!---------------------------------------")
      setImageLoading1(false);
      history.push("/")
    }
    else {
      // console.log("--------------------------------FAILURE!---------------------------------------")
      setImageLoading1(false);
      console.log("error1");
    }

    // // Image 2 submission
    // const formData2 = new FormData();
    // formData2.append("spotId", spotId)
    // formData2.append("image", image2);

    // setImageLoading2(true);

    // const createdImage2 = await dispatch(addImage(formData2));
    // if (createdImage2.ok) {
    //   setImageLoading2(false);
    // }
    // else {
    //   setImageLoading2(false);
    //   console.log("error2");
    // }

    // // Image 3 submission
    // const formData3 = new FormData();
    // formData3.append("spotId", spotId)
    // formData3.append("image", image3);

    // setImageLoading3(true);

    // const createdImage3 = await dispatch(addImage(formData3));
    // if (createdImage3.ok) {
    //   setImageLoading3(false);
    // }
    // else {
    //   setImageLoading3(false);
    //   console.log("error3");
    // }

    // // Image 4 submission
    // const formData4 = new FormData();
    // formData4.append("spotId", spotId)
    // formData4.append("image", image4);

    // setImageLoading4(true);

    // const createdImage4 = await dispatch(addImage(formData4));
    // if (createdImage4.ok) {
    //   setImageLoading4(false);
    // }
    // else {
    //   setImageLoading4(false);
    //   console.log("error4");
    // }

    // // Image 5 submission
    // const formData5 = new FormData();
    // formData5.append("spotId", spotId)
    // formData5.append("image", image5);

    // setImageLoading5(true);

    // const createdImage5 = await dispatch(addImage(formData5));
    // if (createdImage5.ok) {
    //   setImageLoading5(false);
    //   history.push('/')
    // }
    // else {
    //   setImageLoading5(false);
    //   console.log("error5");
    // }
  }

  return (
    <div>
      <h1>Spot created!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="create-image-file-1">Image 1:</label>
          <input
            id="create-image-file-1"
            type="file"
            accept="image/*"
            onChange={updateImage1}
          />
          {imageLoading1 && <p>Loading...</p>}
        </div>
        {/* <div>
          <label htmlFor="create-image-file-2">Image 2:</label>
          <input
            id="create-image-file-2"
            type="file"
            accept="image/*"
            onChange={updateImage2}
          />
          {imageLoading2 && <p>Loading...</p>}
        </div>
        <div>
          <label htmlFor="create-image-file-3">Image 3:</label>
          <input
            id="create-image-file-3"
            type="file"
            accept="image/*"
            onChange={updateImage3}
          />
          {imageLoading3 && <p>Loading...</p>}
        </div>
        <div>
          <label htmlFor="create-image-file-4">Image 4:</label>
          <input
            id="create-image-file-4"
            type="file"
            accept="image/*"
            onChange={updateImage4}
          />
          {imageLoading4 && <p>Loading...</p>}
        </div>
        <div>
          <label htmlFor="create-image-file-5">Image 5:</label>
          <input
            id="create-image-file-5"
            type="file"
            accept="image/*"
            onChange={updateImage5}
          />
          {imageLoading5 && <p>Loading...</p>}
        </div> */}
        <div>
          <button
            type="submit"
          >Submit</button>
        </div>
      </form>
    </div>

  )
}

export default CreateImage;
