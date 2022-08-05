import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSpots } from "../../store/spots";


const SpotsList = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots);

  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch])

  return (
    spots ?
      <div>
        <h1>Spots List</h1>
        {
          Object.values(spots).map(spot => (
            <div key={spot.id}>
              <Link to={`/spots/${spot.id}`}>
                <div>{spot.name}</div>
                <div>
                  <img
                    src={spot.images[Object.keys(spot.images)[0]].imageUrl} />
                </div>
                <div>${spot.price}</div>
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
