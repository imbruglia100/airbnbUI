/** @format */

const AddReviewModal = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form className='modalForm'>
      <h1>How was your stay?</h1>
      <div className='input-container'>
        <textarea placeholder='Leave your review here...' />
      </div>
      <div className='input-container'>
        <label>Star rating</label>
        <input type='number' />
      </div>

      <button className='primary-btn'>Submit your review</button>
    </form>
  );
};

export default AddReviewModal;
