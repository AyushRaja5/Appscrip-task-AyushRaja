import React from 'react'
import Card from './Card'
const Shop = ({products}) => {
  
  return (
    <div className="shop-class">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          price={`${product.price} $.`}
          pic={product.image}
          rating = {product.rating}
        />
      ))}
    </div>
  )
}

export default Shop