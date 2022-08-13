import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteSpot, getOneSpot, getSpots } from "../../store/spots";
import CreateBooking from "../CreateBooking";
import './SpotDetails.css'





const SpotDetails = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)
  const spots = useSelector(state => state.spots)
  const spot = spots[parseInt(spotId)]
  console.log(spots, spot)
  // const spot = useSelector(state => state.spots.spot)

  useEffect(() => {
    // dispatch(getOneSpot(parseInt(spotId)))
    dispatch(getSpots())
  }, [dispatch])


  const handleDelete = async (e) => {
    e.preventDefault();

    let deletedSpot = await dispatch(deleteSpot(spotId))

    if (deletedSpot) {
      history.push('/')
    }
  }

  return (
    spot ?
      <div className="spot-details-container">
        <div className="spot-heading">
          <h1>Spot Details</h1>
          <div className="spot-name">
            {spot.name}
          </div>
          <div>
            ${spot.price}
          </div>
          {sessionUser && sessionUser.id === spot.ownerId &&
            <div>
              <div className="spot-button">
                <Link to={{ pathname: `/spots/${spot.id}/edit`, state: { spot: spot } }}>
                  Edit
                </Link>
              </div>
              <div className="spot-button">
                <button onClick={e => handleDelete(e)}>Delete</button>
              </div>
            </div>
          }
        </div>
        <div className="spot-images">
          {spot.images[Object.keys(spot.images)[0]] ?
            Object.values(spot.images).map((image, index) => (
              index < 5 &&
              <div key={image.id}>
                <img
                  className={`spot-single-image image-${index}`}
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://sharedndbucket.s3.us-west-1.amazonaws.com/default-image-home.png" }}
                  src={image.imageUrl} />
              </div>
            ))
            :
            ['1', '2', '3', '4', '5'].map((image, index) => (
              <div key={image}>
                <img className={`spot-single-image image-${index}`} src='https://sharedndbucket.s3.us-west-1.amazonaws.com/default-image-home.png' />
              </div>
            ))
          }
        </div>


        <div>
          <div className="spot-owner">
            Hosted by {spot.owner.username}
          </div>
          <div className="spot-description">
            <div>
              <h3>About this space</h3>
            </div>
            <div>
              {spot.description}
            </div>
          </div>
          <div>
            {/* {spot.reviews && Object.values(spot.reviews).map(review => (
              <div key={review.id}>
                {review}
              </div>
            ))} */}
          </div>
          <div className="create-booking-calendar">
            {/* <Link to={`/spots/${spot.id}/bookings/new`}>
          Book this spot now!
          </Link> */}
            <CreateBooking spot={spot} />
          </div>
        </div>

      </div>
      :
      <h1>Loading...</h1>
  )
}

export default SpotDetails;
