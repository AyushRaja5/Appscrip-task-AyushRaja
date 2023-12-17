import React, { useEffect, useState } from 'react';
import Filter from './Filter/Filter';
import Shop from './Shop/Shop';
import './home.css';
import down from '../images/down.png'

const Home = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showRecommendationDialog, setShowRecommendationDialog] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const toggleRecommendationDialog = () => {
    setShowRecommendationDialog(!showRecommendationDialog);
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='home-class'>
      <div className='filters-heading'>
        <span><span className='total-items'><strong>{products.length} ITEMS</strong></span><span onClick={toggleFilter}>{showFilter ? <>Hide Filter</> : <>Filter</>}</span></span>
        <span>
          <span onClick={toggleRecommendationDialog} className='recomded'>Recommended</span><img src={down} alt='downImg' />
          {showRecommendationDialog && (
            <div className='mobileview'>
              <span>SHOP</span>
              <span>SKILLS</span>
              <span>STORIES</span>
              <span>ABOUT</span>
              <span>CONTACT US</span>
            </div>
          )}
        </span>
      </div>
      <div className='main-class' style={{ gridTemplateColumns: showFilter ? '20% 1fr' : '100%' }}>
        {showFilter && <Filter />}
        <div className='main-shop'>
          <Shop products={products} />
        </div>
      </div>
    </div>
  );
}

export default Home;
