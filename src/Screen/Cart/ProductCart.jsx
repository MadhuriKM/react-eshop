/* import React, { useEffect, useState} from 'react' */
import React from 'react'
import { toast } from 'react-toastify'
import useCart  from '../../CustomHook/Cart'

function ProductCart() {
  const { cartData, removeCart } = useCart()

  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <h3>Cart Info</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartData.cart && cartData.cart.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td> { item.title } </td>
                      <td> <img src={item?.image} alt="no image" height={50} width={50} /> </td>
                      <td> &#8377; {  item.price } </td>
                      <td>
                        <button className='btn decr'>-</button>
                          <strong> { item.quantity} </strong>
                        <button className='btn incr'>+</button>
                      </td>
                      <td> &#8377; { item.quantity * item.price } </td>
                      <td>
                        <button onClick={() => removeCart(item.id)} className="btn decr">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductCart