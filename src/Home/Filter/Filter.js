import React from 'react'
import down from '../../images/down.png'
const Filter = () => {
  return (
    <div className="filter-class">
      <div className="customizable-checkbox">
        <input type="checkbox" id="customCheckbox" />
        <label htmlFor="customCheckbox">CUSTOMIZABLE</label>
      </div>
      <div className='tab'>
        <div className='tab-head'><span>IDEAL FOR</span>  <span><img src={down} alt='downimg' /></span></div>
        <div>All</div>
      </div>
      <div className='tab'>
        <div className='tab-head'><span>OCCASION</span>  <span><img src={down} alt='downimg' /></span></div>
        <div>All</div>
      </div>
      <div className='tab'>
        <div className='tab-head'><span>WORK</span>  <span><img src={down} alt='downimg' /></span></div>
        <div>All</div>
      </div>
      <div className='tab'>
        <div className='tab-head'><span>FABRIC</span>  <span><img src={down} alt='downimg' /></span></div>
        <div>All</div>
      </div>
      <div className='tab'>
        <div className='tab-head'><span>SEGMENT</span>  <span><img src={down} alt='downimg' /></span></div>
        <div>All</div>
      </div>
      <div className='tab'>
        <div className='tab-head'><span>SUITABLE FOR</span>  <span><img src={down} alt='downimg' /></span></div>
        <div>All</div>
      </div>
      <div className='tab'>
        <div className='tab-head'><span>RAW MATERIAL</span>  <span><img src={down} alt='downimg' /></span></div>
        <div>All</div>
      </div>
      <div className='tab'>
        <div className='tab-head'><span>PATTERN</span>  <span><img src={down} alt='downimg' /></span></div>
        <div>All</div>
      </div>
    </div>
  )
}

export default Filter