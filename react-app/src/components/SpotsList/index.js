import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSpots } from "../../store/spots";
import './SpotsList.css'

const SpotsList = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots);

  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch])

  return (
    spots ?
      <div className="spot-list-container">
        {/* <h1>Spots List</h1> */}
        {
          Object.values(spots).map(spot => (
            <div className="single-spot-container" key={spot.id}>
              <Link to={`/spots/${spot.id}`}>
                <div>
                  <img
                    className="spot-list-images"
                    src={spot.images[Object.keys(spot.images)[0]] ? spot.images[Object.keys(spot.images)[0]].imageUrl : 'https://sharedndbucket.s3.us-west-1.amazonaws.com/default-image-home.png'} />
                </div>
                <div className="spot-list-spot-info">
                  <div>{spot.city}, {spot.state ? spot.state : spot.country} </div>
                  <div>${spot.price} night</div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
      :
      <h3>Loading...</h3>
  )
}

export default SpotsList;
