import React, { useEffect, useState } from "react"
import Card from "./Card"

// let url = "https://fakestoreapi.com/products?limit=4"
const Headings = (props) => {
  const { heading, paragraph, url } = props
  const [data, setData] = useState([])

  const getData = async () => {
   try {
     await fetch(url).then((res) => res.json()).then((data) => {
       setData(data)
       console.log(data)

     })
   } catch (error) {
    console.log(error)
   }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <>
      {/* heading  */}
      <div className="heading text-center my-4">
        <h1 className="mx-4">{heading}</h1>
        <span className="horizontal-line mb-3" />
        <p className="mx-4" style={{ color: "#747474" }}>{paragraph}</p>
      </div>

      {/* card Component */}
      <div className="container row row-cols-1 row-cols-md-3 row-cols-lg-4 m-auto g-4 text-center">
        {data.map((data, index) => (
          <div key={index}>
            <Card data={data} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Headings
