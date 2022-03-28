import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import cartApi from "../../api/cartApi";
import formatDate from "../../utils/formatDate";

const TableCart = () => {
  const [listCartOrder, setListCartOrder] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchListCartOrder = async () => {
      const res = await cartApi.getAllCart();
      console.log(res);
      setListCartOrder(res.data);
    };
    if (mounted) {
      fetchListCartOrder();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <Table
        className="mt-5 px-3 text-center align-baseline text-center align-middle"
        striped
        bordered
      >
        <thead className="fs-4">
          <tr>
            <th className="align-middle" rowSpan={2}>
              STT
            </th>
            <th colSpan={4}>Thông tin khách hàng</th>
            <th colSpan={7}>Thông tin đơn hàng</th>
            <th className="align-middle" rowSpan={2}>
              Thời gian đặt hàng
            </th>
          </tr>
          <tr className="align-middle">
            <th>Tên khách hàng</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th style={{ minWidth: "16rem" }}>Tên sản phẩm</th>
            <th style={{ maxWidth: "4rem" }}>Size</th>
            <th>Số lượng</th>
            <th>Tổng đơn hàng</th>
            <th>Giảm giá (10%)</th>
            <th>Phí vận chuyển</th>
            <th className="text-danger">TỔNG CỘNG</th>
          </tr>
        </thead>
        <tbody className="fs-5">
          {listCartOrder?.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.userInfo.name}</td>
              <td>{item.userInfo.email}</td>
              <td>{item.userInfo.telephone}</td>
              <td>{`${item.userInfo.address.ward}, ${item.userInfo.address.district}, ${item.userInfo.address.province}`}</td>
              <td
                style={{
                  padding: "0",
                  height: "11rem",
                  position: "relative",
                }}
                colSpan={3}
              >
                <Table
                  className="align-middle"
                  style={{
                    margin: 0,
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "100%",
                  }}
                >
                  <tbody>
                    {item.cartInfo.items.map((item) => (
                      <tr
                        style={{ border: "1px solid #dee2e6" }}
                        key={item.item._id}
                      >
                        <td
                          style={{
                            border: "1px solid #dee2e6",
                            width: "16rem",
                          }}
                        >
                          {item.item.name}
                        </td>
                        <td
                          style={{
                            border: "1px solid #dee2e6",
                            maxWidth: "0.55rem",
                          }}
                        >
                          {item.size}
                        </td>
                        <td style={{ border: "1px solid #dee2e6" }}>
                          {item.qty}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
              <td>
                {new Intl.NumberFormat("vi-VN").format(
                  item.cartInfo.totalPrice
                )}
                .000đ
              </td>
              <td>
                {new Intl.NumberFormat("vi-VN").format(
                  (item.cartInfo.totalPrice * 10) / 100
                )}
                .000đ
              </td>
              <td>30.000đ</td>
              <td className="fw-bold fs-4 text-danger">
                {new Intl.NumberFormat("vi-VN").format(
                  (item.cartInfo.totalPrice * 90) / 100 - 30
                )}
                .000đ
              </td>
              <td>{formatDate(item.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableCart;
