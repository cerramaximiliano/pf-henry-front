import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviewsByProductId } from '../../redux/Reviews/reviewsActions';
import Rating from '@mui/material/Rating';

const ProductReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [ratings, setRatings] = useState([]); 
  const [averageRating, setAverageRating] = useState(5); 

  useEffect(() => {
    dispatch(fetchReviewsByProductId(id)); // Obtén las reseñas por ID del producto
  }, [id]);

  const { reviews, isLoading } = useSelector((state) => state.reviews);

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
      const newAverageRating = totalRating / ratings.length;
      setAverageRating(newAverageRating);
    }
  }, [ratings]);
  
  return (
    <div className='max-w-[90vw] bg-white'>
      {isLoading ? (
        <p>Loading...</p>
      ) : reviews.length > 0 ? (
        <div className='grid grid-cols-3 place-content-evenly mx-[20px]  '>
          {reviews.map((review, index) => {
            ratings.push(review.rating);
            return(
              <span key={index} className='flex-row overflow-auto w-[400px]	 m-[10px] bg-graym rounded-none	'>
                <span className='flex items-center ml-[25px] mt-[25px]  '>
                  
                  <span className='grid justify-items-start	'>
                                
                    <Rating
                      name="read-only"
                      value={review.rating}
                      precision={1}
                      readOnly 
                      className=' '
                    />
                  </span>
                </span>
                <p className='font-bayon-bold flex items-center px-[20px] font-monse text-blackFred-300 text-left	mt-0	 overflow-auto	 h-[70px] 	'> {review.comments}</p>
              </span>
            )
          })}
        </div>
      ) : (
        <p className=' font-impact text-black'>No reviews available.</p>
      )}
    </div>
  );
};

export default ProductReview;