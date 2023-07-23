import Image from "next/image";
import React from "react";

const Card = (data: any) => {
  return (
    <>
      <div className="col">
        <div className="card  h-100 ">
          <Image
            src={data?.data.imageUrl}
            className="card-img-top object-fit-contain "
            alt="..."
            width={100}
            height={200}
            loading="lazy"
          />
          <div className="card-body">
            <h5 className="card-title">{data?.data.couponCode}</h5>
            <p className="card-text">{data?.data.description}</p>
            <div className="coupon-code">
              <button className="btn btn-primary position-relative z-1" style={{ marginRight: "-15px" }}>Get Code</button>
              <button className=" btn btn-outline-primary btn-sm disabled position-relative z-0">{data?.data.couponCode.substring(0, 3)}</button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Card;
