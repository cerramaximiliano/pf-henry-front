import { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductId } from '../../redux/products/productsActions';
import { createReview } from '../../redux/reviews/reviewsActions';
import { useAuth0 } from "@auth0/auth0-react";

const FormReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  
  const { isLoading, user, isAuthenticated } = useAuth0();

  const { user_detail } = useSelector(
    (state) => state.users
  );
    const userId = user_detail._id
  useEffect(() => {
    dispatch(getProductId(id));
  }, [id, dispatch]);

  const { detail, loading } = useSelector((state) => state.products);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [productName, setProductName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  useEffect(() => {
    if (!loading && detail && detail.length === 1) {
      setProductName(detail[0].title);
    }
  }, [detail, loading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea un objeto con los datos del formulario
    const reviewData = {
      userId: userId, // Asegúrate de tener el userId
      productId: id,
      rating,
      comments: comment,
    };
    
    // Despacha la acción para crear la revisión
    dispatch(createReview(reviewData));

    setSuccessMessage('Review creada exitosamente');
    setTimeout(() => {
      setSuccessMessage('');
      navigate('/products');
    }, 3000);

    setRating(1);
    setComment('');
  };
  console.log(id)
  const isFormValid = () => {
    return rating !== '' && rating >= 1 && rating <= 5 && comment.length <= 300 && comment.length != 0;
  };

  return (
    <div className=' bg-cyan-800 rounded' >
       
        <div key={id}>
          <div >
            <p>Name: {productName}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div >
              <label>Rating (1-5):</label>
              <input
                type="number"
                min="1"
                max="5"
                
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div >
              <label>Review (max 300 characters):</label>
              <textarea
                rows="4"
                maxLength="300"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <button type="submit" disabled={!isFormValid()}>
              Submit
            </button>
          </form>
        </div>
      
    </div>
  );
};

export default FormReview;