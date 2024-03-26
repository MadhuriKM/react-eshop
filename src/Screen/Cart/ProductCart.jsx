import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'



function ProductCart() {
  const [cart,setCart] = useState(false)

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
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductCart