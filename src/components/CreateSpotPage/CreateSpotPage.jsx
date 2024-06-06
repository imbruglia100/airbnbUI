/** @format */

import { useDispatch } from "react-redux";
import "./CreateSpotPage.css";
import { useState } from "react";
import { createASpot } from "../../store/spots";
import { useNavigate } from "react-router-dom";

const CreateSpotPage = () => {
  const dispatch = useDispatch();

  const [newSpot, setNewSpot] = useState({
    country: '',
    address: '',
    city: '',
    state: '',
    description: '',
    name: '',
    price: ''
  });

  const [images, setImages] = useState({});

  const [errors, setErrors] = useState({});

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    !newSpot.country
      ? setErrors((prev) => {
          return { ...prev, country: "Country is required" };
        })
      : "";
    !newSpot.address
      ? setErrors((prev) => {
          return { ...prev, address: "Address is required" };
        })
      : "";
    !newSpot.city
      ? setErrors((prev) => {
          return { ...prev, city: "City is required" };
        })
      : "";
    !newSpot.state
      ? setErrors((prev) => {
          return { ...prev, state: "State is required" };
        })
      : "";
    !newSpot.description
      ? setErrors((prev) => {
          return { ...prev, description: "Description is required" };
        })
      : "";

      !newSpot.name
      ? setErrors((prev) => {
          return { ...prev, name: "Name is required" };
        })
      : "";

      !newSpot.price
      ? setErrors((prev) => {
          return { ...prev, price: "Price is required" };
        })
      : "";

      !images.previewImage
      ? setErrors((prev) => {
          return { ...prev, previewImage: "Preview Image is required" };
        })
      : "";

    //   !images.images[0]
    //   ? setErrors((prev) => {
    //       return { ...prev, image: "PreviewImage is required" };
    //     })
    //   : "";

    if(!Object.values(errors).length > 0){
        console.log('All good')
        const { id } = await dispatch(createASpot(newSpot, images.previewImage));
        setNewSpot({})
        navigate(`/huts/${id}`)
    }

    setErrors({})
  };
  return (
    <form className='create-spot-form' onSubmit={handleSubmit}>
      <h1>Create a new Hut</h1>
      <div className='form-section'>
        <h2>Where</h2>
        <h4>
          Guests will only get your exact address once they booked a
          reservation.
        </h4>
        <div className='form-item'>
          <label>Country <span className="error">{errors.country}</span></label>
          <input
            type='text'
            value={newSpot.country}
            placeholder='United States'
            onChange={({ target }) =>
              setNewSpot((prev) => {
                return { ...prev, country: target.value };
              })
            }
          />
        </div>

        <div className='form-item'>
          <label>Address<span className="error">{errors.address}</span></label>
          <input
            type='text'
            value={newSpot.address}
            placeholder='123 Main St'
            onChange={({ target }) =>
              setNewSpot((prev) => {
                return { ...prev, address: target.value };
              })
            }
          />
        </div>

        <div className='multi-form-items'>
          <div className='form-item'>
            <label>City<span className="error">{errors.city}</span></label>
            <input
              type='text'
              value={newSpot.city}
              placeholder='Boston'
              onChange={({ target }) =>
                setNewSpot((prev) => {
                  return { ...prev, city: target.value };
                })
              }
            />
          </div>

          <div className='form-item'>
            <label>State<span className="error">{errors.state}</span></label>
            <input
              type='text'
              value={newSpot.state}
              placeholder='MA'
              onChange={({ target }) =>
                setNewSpot((prev) => {
                  return { ...prev, state: target.value };
                })
              }
            />
          </div>
        </div>
        <div className='multi-form-items'>
          <div className='form-item'>
            <label>Latitude<span className="error">{errors.lat}</span></label>
            <input
              type='number'
              value={newSpot.lat}
              placeholder='32.125623'
              onChange={({ target }) =>
                setNewSpot((prev) => {
                  return { ...prev, lat: target.value };
                })
              }
            />
          </div>

          <div className='form-item'>
            <label>Longitude<span className="error">{errors.lng}</span></label>
            <input
              type='number'
              value={newSpot.lng}
              placeholder='-42.962523'
              onChange={({ target }) =>
                setNewSpot((prev) => {
                  return { ...prev, lng: target.value };
                })
              }
            />
          </div>
        </div>
      </div>

      <div className='form-section'>
        <h2>Describe it</h2>
        <h4>
          Mention the best features of your space, any special amentities like
          fast wif or parking, and what you love about the neighborhood.
        </h4>
        <div className='form-item'>
          <label>Description<span className="error">{errors.description}</span></label>
          <textarea
            type='text'
            value={newSpot.description}
            placeholder='Beautiful bungalow right near the beach!'
            onChange={({ target }) =>
              setNewSpot((prev) => {
                return { ...prev, description: target.value };
              })
            }
          />
        </div>
      </div>

      <div className='form-section'>
        <h2>Name Your Hut</h2>
        <h4>
          Catch guests attention with a spot title that highlights what makes
          your place special.
        </h4>
        <div className='form-item'>
          <label>Name<span className="error">{errors.name}</span></label>
          <input
            type='text'
            value={newSpot.name}
            placeholder='Beach Bungalow'
            onChange={({ target }) =>
              setNewSpot((prev) => {
                return { ...prev, name: target.value };
              })
            }
          />
        </div>
      </div>

      <div className='form-section'>
        <h2>Set a Price</h2>
        <h4>
          Competitive pricing can help your listing stand out and rank higher in
          search results.
        </h4>
        <div className='form-item'>
          <label>Price<span className="error">{errors.price}</span></label>
          <input
            type='number'
            value={newSpot.price}
            placeholder='124'
            onChange={({ target }) =>
              setNewSpot((prev) => {
                return { ...prev, price: target.value };
              })
            }
          />
        </div>
      </div>

      <div className='form-section'>
        <h2>Add Pictures!</h2>
        <h4>Submit a link to at least one photo to publish your spot.</h4>
        <div className='form-item'>
        <span className="error">{errors.previewImage}</span>
          <input
            type='text'
            placeholder='Preview Image URL'
            onChange={({ target }) =>
              setImages((prev) => {
                return { ...prev, previewImage: target.value};
              })
            }
          />
        </div>

        <div className='form-item'>
          <input
            type='text'
            placeholder='Image URL'
            onChange={({ target }) =>
              setImages((prev) => {
                return { ...prev, images: {...prev.images, url: target.value} };
              })
            }
          />
        </div>

        <div className='form-item'>
          <input
            type='text'
            placeholder='Image URL'
            onChange={({ target }) =>
              setImages((prev) => {
                return { ...prev, images: {...prev.images, url:target.value} };
              })
            }
          />
        </div>

        <div className='form-item'>
          <input
            type='text'
            placeholder='Image URL'
            onChange={({ target }) =>
              setImages((prev) => {
                return { ...prev, images: {...prev.images, url: target.value}};
              })
            }
          />
        </div>

        <div className='form-item'>
          <input
            type='text'
            placeholder='Image URL'
            onChange={({ target }) =>
              setImages((prev) => {
                return { ...prev, images: {...prev.images, url: target.value} };
              })
            }
          />
        </div>
      </div>
      <div>
        <button className='primary-btn'>Create Hut</button>
      </div>
    </form>
  );
};

export default CreateSpotPage;
