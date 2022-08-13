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
      <div className="spots-container">
        <div className="splash-banner">
          <img className="splash-banner-img" src='https://sharedndbucket.s3.us-west-1.amazonaws.com/splash-banner3.png' />
        </div>
        <div className="splash-text">
          Welcome to Sharednd, a site where you can host your homes and book other people's homes all around the world!
        </div>
        <div className="spot-list-container">
          {
            Object.values(spots).map(spot => (
              <div className="single-spot-container" key={spot.id}>
                <Link to={`/spots/${spot.id}`}>
                  <div>
                    <img
                      className="spot-list-images"
                      src={spot.images[Object.keys(spot.images)[0]] ? spot.images[Object.keys(spot.images)[0]].imageUrl : 'https://sharedndbucket.s3.us-west-1.amazonaws.com/default-image-home.png'}
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://sharedndbucket.s3.us-west-1.amazonaws.com/default-image-home.png" }}
                    />
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
      </div>
      :
      <h3>Loading...</h3>
  )
}

export default SpotsList;
