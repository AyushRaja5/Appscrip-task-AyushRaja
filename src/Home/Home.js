import React, { useEffect, useState, useRef } from 'react';
import Filter from './Filter/Filter';
import Shop from './Shop/Shop';
import './home.css';
import down from '../images/down.png';

const Home = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showRecommendationDialog, setShowRecommendationDialog] = useState(false);
  const mobileViewRef = useRef(null);
  const filterRef = useRef(null);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleRecommendationDialog = () => {
    setShowRecommendationDialog(!showRecommendationDialog);
  };

  const handleOutsideClick = (event) => {
    if (mobileViewRef.current && !mobileViewRef.current.contains(event.target)) {
      setShowRecommendationDialog(false);
    }

    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowFilter(false);
    }
  };

  useEffect(() => {
    if (showRecommendationDialog || showFilter) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showRecommendationDialog, showFilter]);

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
        <span>
          <span className='total-items'><strong>{products.length} ITEMS</strong></span>
          <span onClick={toggleFilter}>{showFilter ? <>Hide Filter</> : <>Filter</>}</span>
        </span>
        <span>
          <div className='recom-class'>
            <span onClick={toggleRecommendationDialog} className='recomded'>Recommended</span>
            <img src={down} alt='downImg' />
            {showRecommendationDialog && (
              <div className='mobileview' ref={mobileViewRef}>
                <span>NEW FIRST</span>
                <span>POPULAR</span>
                <span>PRICE: HIGH TO LOW</span>
                <span>PRICE: LOW TO HIGH</span>
              </div>
            )}
          </div>
        </span>
      </div>
      <div className='main-class' style={{ gridTemplateColumns: showFilter ? '20% 1fr' : '100%' }}>
        {showFilter && <Filter ref={filterRef} />}
        <div className='main-shop'>
          <Shop products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
