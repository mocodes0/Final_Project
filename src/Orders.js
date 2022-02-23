import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
 
    //put some order here
        setOrders([{id:56561,data:{basket:[
            {
                "id": "12321341",
                "title": "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
                "image": "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
                "price": 11.96,
                "rating": 5
            }
        ]}}])
  })

  

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders