import { FaStar } from 'react-icons/fa';
import './ReviewCard.css'
import { useDispatch } from 'react-redux';
import { delelteReview } from '../../store/reviews';

const ReviewCard = ({ manage, review }) => {
    const {User} = review
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(delelteReview(review))
    }

    return (
        <div className="review-container">
            <h2>{User?.firstName[0].toUpperCase() + User?.firstName.slice(1) || 'Happy Renter'}</h2>
            <h3>{review.createdAt.split('T')[0]}</h3>
            {review.review}
            <div className='star-container'>
                <FaStar/><span>{review.stars}</span>
            </div>
            {manage && (
                <div className="btns-group">
                    <button className="secondary-btn">Edit</button>
                    <button className="primary-btn" onClick={handleDelete} style={{width:"fit-content"}}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ReviewCard;
