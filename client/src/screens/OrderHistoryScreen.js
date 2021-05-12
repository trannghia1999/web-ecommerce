import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  return (
    <div>
      <h1>Lịch Sử Đặt Hàng</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Ngày</th>
              <th>Tổng</th>
              {/* <th>PAID</th> */}
              <th>Trạng thái giao hàng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{(order.totalPrice).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                {/* <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td> */}
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'đang giao'}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                    style={{backgroundColor:"green",color:"white"}}
                  >
                    Chi Tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}