import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

import { Link } from "react-router-dom";

// import Carousel from "react-bootstrap/Carousel";

export default function HomeScreen() {
  const apparelcarousels = [
    "https://glab.vn/storage/uploads/advert/6066ad800c62c.jpg",
    "https://glab.vn/storage/uploads/advert/5f47b8a34de8f.jpg",
    
  ];
  const foowearcarousels = [
  
    "https://glab.vn/storage/uploads/advert/6066ad800c62c.jpg",
    "https://glab.vn/storage/uploads/advert/6087d33011fff.jpg",
  ];

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

 

  useEffect(() => {
    dispatch(listProducts({}));
    
  }, [dispatch]);
 
  return (
    <div className="homescreen">
      <div>
    
        <>
         
          <Carousel  showArrows autoPlay showThumbs={false}>
            {apparelcarousels.map((carousel,index) => (
              <div  key={index}>
              
                  <Link to='/'>
                  <img    src={carousel}  />
                  
                </Link>
              </div>
            ))}
          </Carousel>
  
        
       
         
        </>
      
      </div>
      <div className="homescreen__items">
      <h2 className="name_tag">apparel</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {/* {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))} */}
            {
              products.map((product)=>(
                
                product.category==="Shoes"?(""):(
                  <Product key={product._id} product={product}></Product>
                 
                )
              
              ))
            }
          </div>
        </>
      )}
      </div>
     

      <div>
    
    <>
     
      <Carousel  showArrows autoPlay showThumbs={false}>
        {foowearcarousels.map((foowearcarousel,index) => (
          <div  key={index}>
       
              <Link to='/'>
              <img   src={foowearcarousel}  />
              
            </Link>
          </div>
        ))}
      </Carousel>

    
   
     
    </>
  
  </div>
      <div className="homescreen__items">
      <h2 className="name_tag">footwear</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {/* {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))} */}
            {
              products.map((product)=>(
                product.category==="Shoes"?(<Product product={product}></Product>):("")
              ))
            }
          </div>
        </>
      )}
      </div>
    </div>
  );
}
