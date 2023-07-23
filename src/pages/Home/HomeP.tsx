import Carosel from '@/Components/Carosel/Carosel'
import Footer from '@/Components/Footer/Footer'
import Headings from '@/Components/Headings/Headings'
import NavbarComp from '@/Components/Navbar/NavbarComp'
import React from 'react'

const HomeP = () => {
  return (
    <>
      <NavbarComp />
      <Carosel />
      <Headings heading="Latest Deals" paragraph="Grab the best deals of the day from popular stores along with the cashback." radioNames="Handpicked, Online Games, Booking" />
      <Headings heading="Popular Deals" paragraph="Browse the store with boosted cashback rates, hurry to grab the cashback" radioNames="Handpicked, Online Games, Booking" />
      <Footer />
    </>
  )
}

export default HomeP