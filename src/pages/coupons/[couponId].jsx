import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const CouponDetails = () => {
    const router = useRouter();
    const Id = router.query.couponId;
    const [data, setData] = useState([])

    const getData = async () => {
        const url = `https://fakestoreapi.com/products/${Id}`
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
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <Image placeholder='blur' blurDataURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnWVMU7KhaoJLtkpXK-OC902ZgE1d7Nzbow&usqp=CAU' src={data?.image} alt="Product Name" class="img-fluid" width={250} height={300} />
                    </div>
                    <div class="col-md-6">
                        <h1>{data?.title}</h1>
                        <p>{data?.description} </p>
                        <p>${data.price}</p>
                        <div className="coupon-code">
                            <Link href={`#`}>
                                <button id="getCode" className="btn btn-primary position-relative z-1" style={{ marginRight: "-27px" }}>Get Code</button>
                            </Link>
                            <button className=" btn btn-outline-primary btn-sm disabled position-relative z-0">{data?.title?.substring(0, 5).trim()}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CouponDetails;