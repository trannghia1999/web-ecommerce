import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import currencyFormatter from "currency-formatter";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function Product(props) {
  const { product } = props;
  
  return (
    // <>
    //   {product.category==="Jacket"?(
    //     <div key={product._id} className="card">
    //   <div className="cart_item">
    //   <Link to={`/product/${product._id}`}>
    //     <img className="medium" src={product.image[0]} alt={product.name} />
    //   </Link>
    //   </div>
     
    //   <div className="card-body">
    //     <Link to={`/product/${product._id}`}>
    //       <h2>{product.name}</h2>
    //     </Link>
    //     <Rating
    //       rating={product.rating}
    //       numReviews={product.numReviews}
    //     ></Rating>
    //     <div className="row">
    //       <div className="price">
    //       {/* {currencyFormatter.format(product.price, { code: "USD" })} */}
    //       {(product.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}

    //       </div>
    //       {/* <div>
    //         <Link to={`/seller/${product.seller._id}`}>
    //           {product.seller.seller.name}
    //         </Link>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
    //   ):(
    //     <div key={product._id} className="card">
    //   <div className="cart_item">
    //   <Link to={`/product/${product._id}`}>
    //     <img className="medium" src={product.image[0]} alt={product.name} />
    //   </Link>
    //   </div>
     
    //   <div className="card-body">
    //     <Link to={`/product/${product._id}`}>
    //       <h2>{product.name}</h2>
    //     </Link>
    //     <Rating
    //       rating={product.rating}
    //       numReviews={product.numReviews}
    //     ></Rating>
    //     <div className="row">
    //       <div className="price">
    //       {/* {currencyFormatter.format(product.price, { code: "USD" })} */}
    //       {(product.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}

    //       </div>
    //       {/* <div>
    //         <Link to={`/seller/${product.seller._id}`}>
    //           {product.seller.seller.name}
    //         </Link>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
    //   )

    //   }
    // </>
    
    <div key={product._id} className="card">
      <div className="cart_item">
      <Link to={`/product/${product._id}`}>
        <LazyLoadImage effect="blur" className="medium  " placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'} src={product.image[0]} alt={product.name} />
        {/* <LazyLoadImage
    
    effect="blur"
    src={product.image[0]} alt={product.name}
     /> */}
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
          {/* {currencyFormatter.format(product.price, { code: "USD" })} */}
          {(product.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}

          </div>
          {/* <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
