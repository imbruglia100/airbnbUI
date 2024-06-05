
const ReviewCard = ({review}) => {
    const {User} = review
    console.log(User)
    return (
        <div className="comment-container">
            <h2>{User?.firstName || ""}</h2>
            {review.review}
        </div>
    )
}

export default ReviewCard;
