import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const url = 'https://fakestoreapi.com'

function ProductCart() {
  const [cart,setCart] = useState([])

  // read the carts data
  const readCart = async () => {
    await axios.get(`${url}/carts`)
       .then(res => {
        //console.log(`carts =`,res.data)
        setCart(res.data[0])
       }).catch(err => toast.error(err.response.data.msg))
  }

  useEffect(() => {
    readCart()
  },[])

  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <h3>Cart Info</h3>
        </div>
      </div>
    </div>
  )
}

export default ProductCart