import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { createReview, detailsProduct, listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function ProductScreen(props) {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product:productDetail } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
///productlist
const productList = useSelector((state) => state.productList);
const { loading:loadingProducts, error:errorProducts, products } = productList;
//////
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;
// 

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (successReviewCreate) {
      window.alert('Review Submitted Successfully');
      setRating('');
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
    dispatch(listProducts({}));
  }, [dispatch, productId, successReviewCreate]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Please enter comment and rating');
    }
  };
  // console.log(product.image)
  return (
    
    <div className="productscreen">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to={`/search/category/all`}> <i class="fa fa-arrow-left" aria-hidden="true"></i> Tiếp tục mua hàng</Link>
          <div className="row top">
            <div className="col-2">
              <div> <LazyLoadImage
                className="large"
                src={`${productDetail.image[active]}`}
                alt={productDetail.name}
                
              ></LazyLoadImage></div>
             <div className="thumbs-wrap ">
             {productDetail.image.map((item, index) =>
          index === active ? (
            <div className="item-thumb item-thumb--active" key={index}>
              <LazyLoadImage style={{width:"300px"}} src={`${item}`} alt={productDetail.name} />
            </div>
          ) : (
            <div
              className="item-thumb"
              key={index}
              onClick={() => {
                setActive(index);
              }}
            >
              <LazyLoadImage style={{width:"300px"}} src={`${item}`} alt={productDetail.name} />
            </div>
          )
        )}
             </div>
              
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{productDetail.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={productDetail.rating}
                    numReviews={productDetail.numReviews}
                  ></Rating>
                </li>
                <li>Giá : {(productDetail.price) .toLocaleString('vi', {style : 'currency', currency : 'VND'})}
               
                </li>
                <li>
                  
                  {/* <p>{product.description}</p> */}
                  {(productDetail.description)==="FreeSize"?"":<p><img style={{width:"350px",height:"400px"}} src={productDetail.description}></img></p> }
                 
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  {/* <li>
                    Seller{' '}
                    <h2>
                      <Link to={`/seller/${product.seller._id}`}>
                        {product.seller.seller.name}
                      </Link>
                    </h2>
                    <Rating
                      rating={product.seller.seller.rating}
                      numReviews={product.seller.seller.numReviews}
                    ></Rating>
                  </li> */}
                  <li>
                    <div className="row">
                      <div>Giá</div>
                      <div className="price">{(productDetail.price) .toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Tình trạng</div>
                      <div>
                        {productDetail.countInStock > 0 ? (
                          <span className="success">Còn {productDetail.countInStock} sản phẩm </span>
                        ) : (
                          <span className="danger">Hết hàng</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {productDetail.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Số lượng</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(productDetail.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
      
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block button-cart"
                        >
                          Thêm vào giỏ hàng
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          
          <div>
            <h2  className="name_tag">Sản phẩm liên quan</h2>
            {loadingProducts ? (
        <LoadingBox></LoadingBox>
      ) : errorProducts ? (
        <MessageBox variant="danger">{errorProducts}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {/* {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))} */}
            {
              products.map((product)=>(
                // product.category==="Shoes"?(<Product product={product}></Product>):("")
                product.category===productDetail.category?(<Product product={product}></Product>):("")

              ))
            }
            
          </div>
        </>
      )}
          </div>
          {/* <div>
            <h2 id="reviews">Reviews</h2>
            {product.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {product.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2>Write a customer review</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excelent</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="primary" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/signin">Sign In</Link> to write a review
                  </MessageBox>
                )}
              </li>
            </ul>
          </div> */}
        </div>
      )}
    </div>
  );
}
