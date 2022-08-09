import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteSpot, getOneSpot, getSpots } from "../../store/spots";
import CreateBooking from "../CreateBooking";





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
      <div>
        <h1>Spot Details</h1>
        <div>
          {spot.name}
        </div>
        <div>
          ${spot.price}
        </div>
        <div>
          {Object.values(spot.images).map(image => (
            <div>
              <img src={image.imageUrl} />
            </div>
          ))}
        </div>
        {sessionUser && sessionUser.id === spot.ownerId &&
          <div>
            <div>
              <Link to={`/spots/${spot.id}/edit`}>
                Edit
              </Link>
            </div>
            <div>
              <button onClick={e => handleDelete(e)}>Delete</button>
            </div>
          </div>
        }
        <div>
          {/* <Link to={`/spots/${spot.id}/bookings/new`}>
          Book this spot now!
          </Link> */}
          <CreateBooking spot={spot} />
        </div>
      </div>
      :
      <h1>Loading...</h1>
  )
}

export default SpotDetails;
