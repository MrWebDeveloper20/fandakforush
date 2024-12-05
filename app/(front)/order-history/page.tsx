import { Metadata } from 'next'
import MyOrders from './MyOrder'

export const metadata: Metadata = {
  title: 'Order History',
}
export default function OrderHistory() {
  return (
    <>
      <h1 className="text-white text-3xl py-2">Order History</h1>
      <MyOrders />
    </>
  )
}
