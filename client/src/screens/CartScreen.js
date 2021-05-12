import React, { useEffect } from 'react';
import currencyFormatter from "currency-formatter";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <div className="cartscreen">
       <Link to={`/search/category/all`}> <i class="fa fa-arrow-left" aria-hidden="true"></i> Tiếp tục mua hàng</Link>
    <div className="row top">
      <div className="col-2">
        <h1>Giỏ Hàng</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            Giỏ hàng rỗng. <Link to="/">tiếp tục mua hàng</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div> 
                    <img
                      src={item.image [0] }
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                  {/* {currencyFormatter.format((item.price)*(item.qty), { code: "USD" })} */}
                  {((item.price)*(item.qty)).toLocaleString('vi', {style : 'currency', currency : 'VND'})}

                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i  className="fa fa-trash-o" style={{color:"red"}} aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Tổng ({cartItems.reduce((a, c) => a + c.qty, 0)} sản phẩm) : {""}
               
                {  cartItems.reduce((a, c) => a + c.price * c.qty, 0).toLocaleString('vi', {style : 'currency', currency : 'VND'})}

              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Thanh Toán
              </button>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
