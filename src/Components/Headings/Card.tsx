import Image from "next/image";
import React from "react";

const Card = (data: any) => {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <Image
            src={data?.data.image}
            className="card-img-top object-fit-contain"
            alt="..."
            width={100}
            height={200}
            loading="lazy"
          />
          <div className="card-body">
            <h5 className="card-title">{data?.data.price}</h5>
            <p className="card-text">{data?.data.title}</p>
            <div className="coupon-code">
              <button id= "getCode" className="btn btn-primary position-relative z-1" style={{ marginRight: "-27px" }}>Get Code</button>
              <button className=" btn btn-outline-primary btn-sm disabled position-relative z-0">{data?.data.title.substring(0, 5).trim()}</button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Card;
