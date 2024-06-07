import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotsFromCurrent } from "../../store/session";
import './ManageHuts.css'
import SmallSpotCard from "./SmallSpotCard";
const ManageHutsPage = () => {
    const dispatch = useDispatch()
    const userSpots = useSelector(state=>state.session.userSpots)

    useEffect(() => {
        dispatch(getSpotsFromCurrent())
    }, [dispatch])

    return (
        <div className="manage-spots-container">
            <h1>Manage Your Huts</h1>
            <div className="manage-spot-cards">
            {
                userSpots ? Object.values(userSpots).map(spot => (<SmallSpotCard spot={spot} />)):<h2>You have no huts :{`(`}</h2>
            }
            </div>
        </div>
    )
}

export default ManageHutsPage;
