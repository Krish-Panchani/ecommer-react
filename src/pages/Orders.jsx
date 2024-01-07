import React from 'react'
import OrdersData from './orders_data.json'
import shop1 from '../img/shop1.png'
import Navbar from '../components/Navbar';

export default function Orders() {
  return (
   <>
   <Navbar/>
   <section>
    <div class="py-8 max-w-lg ">
        <div>
            <h2 class="font-lexend-700 text-xl text-primary p-4">Your Orders Today,</h2>
        </div>
    </div>

    <div class="px-2 flex flex-col lg:flex-row">
   {
    OrdersData.map(order => {
     return (
        <div class="p-2 border-2 border-gray-400 rounded-lg mx-auto my-2 w-full max-w-sm">
        <div class="flex justify-center">
            <span class="text-white text-base border rounded-lg bg-[#006F9E] p-1">{order.product}</span>
        </div>

        <div class="flex justify-center">
            <div>
                <img src={shop1} alt="" class="object-cover w-40 rounded-t-lg h-32 rounded-lg" />
            </div>

            <div class="p-2 text-sm">
                <h1 class="font-bold">Name: <span class="font-normal">{order.name}</span></h1>
                <h1 class="font-bold">Delivery Add: <span class="font-normal">{order.address}</span></h1>
                <h1 class="font-bold">Mobile No: <span class="font-normal">{order.mobile}</span></h1>
            </div>
        </div>

        <div class="text-xs py-2 flex justify-center">
            <span class="border rounded-l-md bg-[#006F9E] text-white p-1">{order.price} Rs./-</span>
            <span class="border rounded-r-md bg-[#006F9E] text-white p-1">{order.quantity} Qty</span>
            <span class="border rounded-r-md bg-red-500 text-white p-1 mx-2">{order.status}</span>
        </div>
    </div>
     )
    })
   }
   </div>

</section>
   </>
  )
}