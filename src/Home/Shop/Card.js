import React, { useState } from 'react'
import './card.css'
import heart from '../../images/heart.png'
import redheart from '../../images/redheart.png'
const Card = ({ price, title, pic, rating }) => {
    const [isLiked, setIsLiked] = useState(false);
    const truncatedTitle = title.slice(0, 75);
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div className='card-class'>
            <img src={pic} className='product-img' alt='productImg' />
            <div className='product-info'>
                <div className='title'>
                    <div className='price-rating'>
                        <span className='price'>{price}</span>
                        <div className='right-rating-heart'>
                            <span className='rating'>Ratings: <strong>{rating.rate}</strong></span>
                            <div className='heart' onClick={toggleLike}>
                                {isLiked ? (
                                    <img src={redheart} alt='heart-filled' />
                                ) : (
                                    <img src={heart} alt='empty-heart' />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='name'>{truncatedTitle}</div>
                </div>
            </div>
        </div>
    )
}

export default Card