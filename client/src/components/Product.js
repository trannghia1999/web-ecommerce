import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import currencyFormatter from "currency-formatter";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function Product(props) {
  const { product } = props;
  
  return (
    
    <div key={product._id} className="card">
      <div className="cart_item">
      <Link to={`/product/${product._id}`}>
        <LazyLoadImage effect="blur" className="medium  " placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'} src={product.image[0]} alt={product.name} />
   
      </Link>
      </div>
     
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">
        
          {(product.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}

          </div>
     
        </div>
      </div>
    </div>
  );
}
