import React from "react"
import Card from "./Card"

const Headings = (props: any) => {
  const couponData: any = [
    {
      imageUrl: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23484824/2023/5/31/fe62fcb7-fc71-422d-bfdf-e55992f964b91685522519661AllenSollyMenMaroonSlimFitOpaqueStripedFormalShirt1.jpg",
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
      imageUrl: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12853670/2020/11/12/11812d72-9790-4ccf-99b2-c01f39c9aa511605161329126TBH-UBER-MR1.jpg",
      description: "Upto 48% Cashback",
      couponCode: "XYZ456"
    },
  ]

  const { heading, paragraph, radioNames } = props

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
