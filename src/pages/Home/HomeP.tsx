import Carosel from '@/Components/Carosel/Carosel'
import Footer from '@/Components/Footer/Footer'
import Headings from '@/Components/Headings/Headings'
import React from 'react'

const HomeP = () => {
  return (
    <>
      <Carosel />
      <Headings url="https://fakestoreapi.com/products/category/jewelery?limit=4" heading="Latest Deals" paragraph="Grab the best deals of the day from popular stores along with the cashback." radioNames="Handpicked, Online Games, Booking" />
      <Headings url="https://fakestoreapi.com/products?limit=4" heading="Popular Deals" paragraph="Browse the store with boosted cashback rates, hurry to grab the cashback" radioNames="Handpicked, Online Games, Booking" />
    </>
  )
}

export default HomeP