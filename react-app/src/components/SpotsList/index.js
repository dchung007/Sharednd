import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpots } from "../../store/spots";



const SpotsList = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots);

  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch])

  console.log(Object.values(spots))

  // Object.values(spots).map(spot => {
  //   console.log(spot.images)
  // })

  return (
    spots ?
      <div>
        <h1>Spots List</h1>
        {
          Object.values(spots).map(spot => (
            <div key={spot.id}>
              <div>{spot.name}</div>
              <div>
                <img src={spot.images[Object.keys(spot.images)[0]].imageUrl} />
              </div>
              <div>{spot.price}</div>
            </div>
          ))
        }
      </div>
      :
      <h3>Loading...</h3>
  )
}

export default SpotsList;
