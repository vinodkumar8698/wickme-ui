import React from "react"
import Card from "./Card"

const Headings = (props: any) => {
  const couponData: any = [
    {
      imageUrl: "https://laraback.enactweb.com/img/cap.jpeg",
      description: "Flat 43.1% Cashback",
      couponCode: "ABC123"
    },
    {
      imageUrl: "https://laraback.enactweb.com/img/tablet.jpg",
      description: "Upto 9.6% Cashback",
      couponCode: "XYZ456"
    },
    {
      imageUrl: "https://laraback.enactweb.com/img/watch-2.jpg",
      description: "Flat 4.8% Cashback",
      couponCode: "XYZ456"
    },
    {
      imageUrl: "https://laraback.enactweb.com/img/shoes.jpg",
      description: "Upto 48% Cashback",
      couponCode: "XYZ456"
    },
  ]

  const { heading, paragraph, radioNames } = props
  const radioButNames = radioNames.split(",")

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
        {couponData.map((data: any, index: number) => (
          <div key={index}>
            <Card data={data} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Headings
