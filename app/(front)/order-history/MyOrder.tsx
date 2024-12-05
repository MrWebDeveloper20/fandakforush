'use client'

import { Order } from '@/lib/models/OrderModel'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function MyOrders() {
  const router = useRouter()
  const { data: orders, error } = useSWR(`/api/orders/mine`)

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  if (error) return <div className='text-white'>An error has occurred</div> 
  if (!orders) return <h2 className='text-white text-xl'>Loading...</h2> 

  return (
    <div className="overflow-x-auto">
      <table className="table text-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody className='text-white'>
          {orders.map((order: Order) => (
            <tr key={order._id}>
              <td>{order._id.substring(20, 24)}</td>
              <td>{order.createdAt.substring(0, 10)}</td>
              <td>{order.totalPrice} Rial</td>
              <td>
                {order.isPaid && order.paidAt
                  ? `${order.paidAt.substring(0, 10)}`
                  : 'not paid'}
              </td>
              <td>
                {order.isDelivered && order.deliveredAt
                  ? `${order.deliveredAt.substring(0, 10)}`
                  : 'not delivered'}
              </td>
              <td className='text-white'>
                <Link href={`/order/${order._id}`} passHref>
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
