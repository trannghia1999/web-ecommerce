import React, { useEffect, useState } from "react";
import { data } from "./data";
import {
  UncontrolledButtonDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";

import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";

import SearchBox from "./components/SearchBox";
import SearchScreen from "./screens/SearchScreen";
import { listProductCategories } from "./actions/productActions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import MapScreen from "./screens/MapScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SupportScreen from "./screens/SupportScreen";
import ChatBox from "./components/ChatBox";

const menus = ["Shop", "About", "Contact"];
function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
// console.log(productCategoryList)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header id="top">
          <div className="row">
            <div className="header-right col-3">
              {/* <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            
            </button> */}
              <Link className="brand" to="/">
                Anthea
              </Link>
            </div>
            {/* <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div> */}
            {/* <div>
           <Link className="name-nav" to={`/search/category/all`}>WEBSTORE</Link>
           <Link className="name-nav">COLECTIONS</Link>
           <Link className="name-nav">CONTACT</Link>
          </div> */}
            <div className="header-left col-1">
                   
            {/* <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route> */}
          
          {/* <Link><i class="fa fa-search" aria-hidden="true"></i></Link> */}
              {userInfo ? (
                <div className="dropdown">
                  <Link className="name-user" to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link className="name-nav" to="/profile">
                        User Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="name-nav" to="/orderhistory">
                        Order History
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="name-nav"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link className="name-nav" to="/signin">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>



                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <Link className="name-nav" to="#admin">
                    Admin <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link className="name-nav" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="name-nav" to="/productlist">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="name-nav" to="/orderlist">
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link className="name-nav" to="/userlist">
                        Users
                      </Link>
                    </li>
                    <li>
                      <Link className="name-nav" to="/support">
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              <Link className="name-nav" to="/cart">
                <i
                  style={{ color: "black" }}
                  className="fa fa-shopping-cart"
                  aria-hidden="true"
                ></i>
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>

             
            </div>
          </div>
          <div className="header-floop">
            <ul className="header-floop-items">
              <li className="header-floop-item dropdown">
                <Link to={`/search/category/all`}>WEBSTORE</Link>
                <div className="dropdown-cover">
                  <ul className="dropdown-content">
                  
                    {loadingCategories ? (
                      <LoadingBox></LoadingBox>
                    ) : errorCategories ? (
                      <MessageBox variant="danger">
                        {errorCategories}
                      </MessageBox>
                    ) : (
                      categories.map((c) => (
                        <li key={c}>
                          <Link
                            to={`/search/category/${c}`}
                            onClick={() => setSidebarIsOpen(false)}
                          >
                            {c}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </li>

              <li className="header-floop-item">
                <Link to="/">ABOUT</Link>
              </li>

              <li className="header-floop-item">
                <Link to="/">CONTACT</Link>
              </li>
            </ul>
          </div>
        </header>

       

        <main>
         
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>

          <AdminRoute
            path="/dashboard"
            component={DashboardScreen}
          ></AdminRoute>
          <AdminRoute path="/support" component={SupportScreen}></AdminRoute>

        

          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
          <div>._.</div>{" "}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
