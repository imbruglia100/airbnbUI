import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotsFromCurrent } from "../../store/spots";

const ManageHutsPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state=> state.session.user)
    const userSpots = useSelector(state=>state.spotState.spots)
    useEffect(() => {
        dispatch(getSpotsFromCurrent(user))
    })

    return (
        <div>
            <h1>Manage Your Huts</h1>
            {
                userSpots && Object.values(userSpots).map(spot => <p>{spot.name}</p>)
            }
        </div>
    )
}

export default ManageHutsPage;
