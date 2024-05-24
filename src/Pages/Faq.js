import React from 'react'
import { useState } from 'react';

const Faq = () => {

    const [q1, setq1] = useState(false);
    const [q2, setq2] = useState(false);
    const [q3, setq3] = useState(false);


    return (
        <div className='text-black my-10'>
            <div className='w-5/6 mx-auto flex flex-col text-center sm:text-left'>
                <h1 className='text-5xl font-bold mb-5 decoration-orange-400 underline'>FAQ</h1>
                <h2 className='text-3xl mb-5 text-gray-600'>Questions come up, Let us answer them</h2>
                <div className='text-center bg-amber-100 p-5'>
                    <p className='font-semibold mb-5 text-2xl'>Commonly asked Questions</p>
                    <div className='cursor-pointer' onClick={() => setq1(!q1)}>
                        <h3 className={q1 ? 'font-extrabold faq__header' : 'font-bold faq__header'}>How to order?</h3>
                        <p className={q1 ? 'block mb-3 leading-relaxed' : 'hidden'}>On the item’s page, simply click the link “Order now” and then fill  out the form that appears. Within 48 hours you will receive an order confirmation that details your order.</p>
                        <p className={q1 ? 'block mb-3 leading-relaxed' : 'hidden'}> Please  carefully look over the copy that will be imprinted on the item, and let us know ASAP if any  changes need to be made.  We will contact you with a confirmation of the order details and artwork imprint for your approval.  No order can go forward without your approval of both. </p>
                    </div>
                    <div className='cursor-pointer' onClick={() => setq2(!q2)}>
                        <h3 className={q2 ? 'font-extrabold faq__header' : 'font-bold faq__header'}>How is your order billed to you?</h3>
                        <p className={q2 ? 'block mb-3 leading-relaxed' : 'hidden'}>Once the merchandise has been shipped, we will send you an invoice with net 15 day payment terms.  This will give you time to receive and inspect the shipment and verify that all is as ordered.</p>
                    </div>
                    <div className='cursor-pointer' onClick={() => setq3(!q3)}>
                        <h3 className={q3 ? 'font-extrabold faq__header' : 'font-bold faq__header'}>How do you return merchandise that does not meet your expectations?</h3>
                        <p className={q3 ? 'block mb-3 leading-relaxed' : 'hidden'}>Please telephone us to alert us of this situation.  We will                                 arrange for return transportation of  the shipment at our                   expense. You will be credited for the quantity returned. More                          questions?  Use the email form below for other inquiries</p>
                    </div>

                </div>
                <a href="mailto:tom@leveradv.com" className='inline-block mt-5 text-blue-600 hover:underline cursor-pointer self-center text-pretty'>Have a different question? Send us a message</a>
            </div>

        </div>
    )
}

export default Faq