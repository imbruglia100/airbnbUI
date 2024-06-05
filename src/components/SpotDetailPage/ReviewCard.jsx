import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    const {User} = review
    console.log(review)
    return (
        <div className="review-container">
            <h2>{User?.firstName || "Happy Renter"}</h2>
            <h3>{review.createdAt.split('T')[0]}</h3>
            {review.review}
        </div>
    )
}

export default ReviewCard;
