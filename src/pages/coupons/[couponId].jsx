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
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Image placeholder='blur' blurDataURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnWVMU7KhaoJLtkpXK-OC902ZgE1d7Nzbow&usqp=CAU' src={data?.image} alt="Product Name" className="img-fluid" width={250} height={300} />
                    </div>
                    <div className="col-md-6">
                        <h1>{data?.title}</h1>
                        <p>{data?.description} </p>
                        <p>${data.price}</p>
                        <div className="coupon-code">
                            <Link href={`#`}>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" id="getCode" className="btn btn-primary position-relative z-1" style={{ marginRight: "-27px" }}>Get Code</button>
                            </Link>
                            <button className=" btn btn-outline-primary btn-sm disabled position-relative z-0">{data?.title?.substring(0, 5).trim()}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Copy Code :</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1 data-bs-dismiss="modal" className='text-center bg-grey' > {data?.title?.substring(0, 6).trim()}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CouponDetails;