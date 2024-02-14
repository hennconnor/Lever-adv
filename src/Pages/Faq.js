import React from 'react'
import { useState } from 'react';

const Faq = () => {

    const [q1, setq1] = useState(false);
    const [q2, setq2] = useState(false);
    const [q3, setq3] = useState(false);


    return (
        <div className='text-black my-10'>
            <div className='w-5/6 mx-auto'>
                <h1 className='text-5xl font-bold'>FAQ</h1>
                <h2 className='text-3xl'>Questions come up, Let us answer them</h2>
                <div className='text-center bg-amber-100 p-5'>
                    <p className='font-semibold'>Commonly asked Questions</p>
                    <div className='cursor-pointer' onClick={() => setq1(!q1)}>
                        <h3 className='font-semibold hover:font-bold'>How to order?</h3>
                        <p className={q1 ? 'block' : 'hidden'}>On the item’s page, simply click the link “Order now” and then fill  out the form that appears. Within 48 hours you will receive an order confirmation that details your order.</p>
                        <p className={q1 ? 'block' : 'hidden'}> Please  carefully look over the copy that will be imprinted on the item, and let us know ASAP if any  changes need to be made.  We will contact you with a confirmation of the order details and artwork imprint for your approval.  No order can go forward without your approval of both. </p>
                    </div>
                    <div className='cursor-pointer' onClick={() => setq2(!q2)}>
                        <h3 className='font-semibold hover:font-bold'>How is your order billed to you?</h3>
                        <p className={q2 ? 'block' : 'hidden'}>Once the merchandise has been shipped, we will send you an invoice with net 15 day payment terms.  This will give you time to receive and inspect the shipment and verify that all is as ordered.</p>
                    </div>
                    <div className='cursor-pointer' onClick={() => setq3(!q3)}>
                        <h3 className='font-semibold hover:font-bold'>How do you return merchandise that does not meet your expectations?</h3>
                        <p className={q3 ? 'block' : 'hidden'}>Please telephone us to alert us of this situation.  We will                                 arrange for return transportation of  the shipment at our                   expense. You will be credited for the quantity returned. More                          questions?  Use the email form below for other inquiries</p>
                    </div>
                    <h3>Have a different question? Reach out to us</h3>
                </div>
            </div>

        </div>
    )
}

export default Faq