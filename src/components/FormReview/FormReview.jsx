import { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductId } from '../../redux/products/productsActions';
import { createReview } from '../../redux/reviews/reviewsActions';
import { useAuth0 } from "@auth0/auth0-react";
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FormReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const [value, setValue] = useState(0);

  const { isLoading, user, isAuthenticated } = useAuth0();

  const { user_detail } = useSelector(
    (state) => state.users
  );
    const userId = user_detail._id
  useEffect(() => {
    dispatch(getProductId(id));
  }, [id, dispatch]);

  const { detail, loading } = useSelector((state) => state.products);
  const [rating, setRating] = useState(0);
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
   /*  setTimeout(() => {
      setSuccessMessage('');
      navigate('/products');
    }, 3000); */

    setRating(0);
    setComment('');
  };
  console.log(id)

  const isFormValid = () => {
    return rating !== '' && rating >= 1 && rating <= 5 && comment.length <= 300 && comment.length != 0;
  };

  return (
    <div className='justify-items-center	' >
      <div className='  bg-graym  mx-[25%] mt-[5%] min-h-[70vh] rounded-none' key={id}>      
        <div className='pt-[10%]' >
          <p className=' font-impact text-blackFred-300 text-[25px] '>Product: {productName}</p>
        </div>
        <form onSubmit={handleSubmit} className='mb-[10px]'>            
          <div className=' mb-[20px]'>
            <div className=' flex items-center  justify-center font-impact text-[30px] '>
              <h6 className=' font-impact text-blackFred-300 mr-[10px] my-[20px] '>Rating:</h6>
              <Rating
                name="rating"
                value={rating}
                precision={1}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
                className=' ml-[10px]'
              />
            </div>
            <TextField
              label="Review (max 300 characters)"
              multiline
              rows={6}
              inputProps={{ maxLength: 300 }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className=' w-[500px]  '
            />          
            </div >
            <button
              type="submit"              
              disabled={!isFormValid()}    
              className=' rounded-none bg-redFred-300 text-blackFred-100 disabled:bg-transparent disabled:text-transparent  '          
            >
              Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default FormReview;