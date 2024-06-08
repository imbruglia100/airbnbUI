import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    const {User} = review

    return (
        <div className="review-container">
            <h2>{User?.firstName[0].toUpperCase() + User?.firstName.slice(1)}</h2>
            <h3>{review.createdAt.split('T')[0]}</h3>
            {review.review}
        </div>
    )
}

export default ReviewCard;
