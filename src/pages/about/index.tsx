"use client"
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <>
            <div className="image-about container text">
                <div className="row">
                    <div className="col flex">
                        <Image className="image-fluid mx-auto" src={"about.svg"} alt="image about" width={300} height={300} />
                    </div>
                    <div className="col flex about">
                        <h1>CodeSpotr.com - Codes That Always Works</h1>
                        &nbsp;
                        <h4>
                            CodeSpotr is a trusted site for all online shopping enthusiasts who want to save money while shopping online.
                        </h4>
                        &nbsp;
                        <p className="light-text">We have outstanding coupon codes available for a huge variety of products. Our coupon codes are all legit and they always work that's our guarantee. So you don't ever have to feel hesitant about using them, feel assured and have a fun shopping experience. We are the perfect destination for all who are looking to save while shopping from top brands. We work really hard to hunt for these latest discount codes and offers so that you get the best savings deals.</p>
                        &nbsp;
                    </div>
                </div>
            </div>

            <div className="image-about container text-center">
                <div className="row">
                    <div className="col flex about">
                        <h1>
                            Our Mission and Vision
                        </h1>
                        &nbsp;
                        <p className="light-text">At CodeSpotr, we aim to enhance your shopping experience and help you save your hard earned money and time. Our network with top-rated brands is already wide and we strive to make it even wider. Because we want to bring the best and verified coupon codes and discount offers for our customers. We regularly update our codes to ensure you get the latest discounts and offers according to seasons and trends. Below are how you can use CodeSpotr.com!!!.
                            &npbsp;
                            At CodeSpotr, we aim to enhance your shopping experience and help you save your hard earned money and time. Our network with top-rated brands is already wide and we strive to make it even wider. Because we want to bring the best and verified coupon codes and discount offers for our customers. We regularly update our codes to ensure you get the latest discounts and offers according to seasons and trends. Below are how you can use CodeSpotr.com!!!.
                        </p>
                        &nbsp;
                    </div>
                    <div className="col flex ">
                        <Image className="image-fluid mx-auto" src={"about2.svg"} alt="image about" width={300} height={300} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About