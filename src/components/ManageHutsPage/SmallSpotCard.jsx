import { useDispatch } from "react-redux"
import { deleteUserSpot } from "../../store/session"

const SmallSpotCard = ({spot}) => {
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deleteUserSpot(spot.id))
    }

    return (
        spot && <div className="small-spot-container">
            <h3>{spot?.name}</h3>
            <div className="imageContainer">

                <img src={spot?.previewImage} />
            </div>
            <p>{spot?.address}, {spot?.city} {spot?.state}</p>
            <div className="btns-group">
                <button className="secondary-btn">Edit</button>
                <button className="primary-btn" onClick={handleDelete} style={{width:"fit-content"}}>Delete</button>
            </div>
        </div>
    )
}

export default SmallSpotCard;
