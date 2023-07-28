import React from 'react'
import { useRouter } from 'next/router';
import Headings  from '@/Components/Headings/Headings';

const CategoryDetails = () => {
  const router = useRouter()
  const name = router.query.category
  const url = `https://fakestoreapi.com/products/category/${name}`
  console.log(url)
  return (
    <>
      <Headings url={url} heading={name + "Stores"} paragraph={name + " Coupon Codes & Offers"} />
    </>
  )
}

export default CategoryDetails