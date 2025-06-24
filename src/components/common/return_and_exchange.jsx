import React from 'react'

const ReturnAndExchange = () => {
    return (
        <div className='container' style={{ marginTop: '140px', paddingBottom: '100px' }}>
            <h2 className="mb-5 text-center">Returns, Exchange & Refunds</h2>
            <img
                src="https://cdn-media.powerlook.in/return_exchange.jpg"
                alt="Shirt Banner"
                className="img-fluid w-100 mb-4"
                style={{ objectFit: 'cover', maxHeight: '500px' }}
            />
            <div className="mb-4 mt-3 text-muted">
                <h5 className="fw-semibold">Exchange</h5>
                <p>
                    We are trying our best to serve your order with the appropriate products and sizes. In case, you receive the wrong product or it doesn't fit your size, you can exchange it within 7 days of delivery.
                </p>
                <p>
                    Your pickup will be arranged by Powerlook within 2-3 working days of your request. All products must be unused, unwashed, and returned with the original packing & tags when we receive them.
                </p>
                <p>
                    In case the order does not meet the above conditions, the exchange request will not be processed and your order will be sent back to your picked-up address.
                </p>
                <p className="fst-italic">
                    *If the requested size is unavailable during an exchange, you can place a refund request, which will be processed according to our refund policy. No other product can be exchanged in place of the original item.
                </p>
            </div>

            <div className="mb-4 text-muted">
                <h5 className="fw-semibold">Returns</h5>
                <p>
                    We are working hard to provide you the latest fashion at affordable rates with best quality fabric. If you didn't like the product or it's not to your expectations, simply return it within 7 days of delivery.
                </p>
                <p>
                    We can arrange a pick-up for you with an easy online return process.
                </p>
                <ol>
                    <li>Login to your <strong>My Orders</strong> section at Powerlook.in</li>
                    <li>Select the Order and click <strong>Return Product</strong></li>
                    <li>or</li>
                    <li>To return the product now,Click Here</li>
                </ol>
                <p className="fst-italic">
                    *Shipping Charges and COD charges charged at the time of placing the order is non-refundable.
                    <br />
                    *We shall charge you shipping charges of ₹100 in case of reverse pick up, the same shall be deducted from your refund.
                </p>
            </div>

            <div className="mb-4 text-muted">
                <h5 className="fw-semibold">Important Points to remember:</h5>
                <ol>
                    <li>Return request needs to be within 7 days of the delivery date.</li>
                    <li>Your pickup will be done in 2-3 working days.</li>
                    <li>All returned products must be unused or unwashed or undamaged and returned with the original packing and tags when we receive it. Items without tags will not be accepted.</li>
                </ol>
                <p>
                    The refund is subject to your returns meeting the above conditions else returns will not be accepted.
                </p>
                <p>
                    In case you receive a Damaged / Defective / Wrong / Missing product, we should be notified within 24 hours of delivery. We request you to email us a photograph of the Damaged / Defective / Wrong / Missing product. In case you fail to inform us about the same, the return might not be processed.
                </p>
            </div>

            <div className="mb-4 text-muted">
                <h5 className="fw-semibold">Refund Policy</h5>

                <h6 className="fw-semibold">Amount Refund:</h6>
                <ol>
                    <li>If you return a product, the COD charges you paid when placing the order will be deducted from your refund.</li>
                    <li>Additionally, a reverse shipping fee of ₹100 will be charged, and the remaining amount will be refunded to your original payment method.</li>
                    <li>However, if you choose to receive your refund in your wallet, the full amount (except the COD charges) will be credited without deducting the ₹100 reverse shipping fee.</li>
                </ol>

                <h6 className="fw-semibold">Mode of Refund:</h6>
                <ol>
                    <li><strong>Prepaid Orders:</strong> The amount will be refunded to the same account from which the order has been placed. Once we receive the product, the amount will be processed in 1-2 working days. Your money will be reflected in your account in 5-7 working days.</li>
                    <li><strong>COD Orders:</strong> The amount will be transferred to the Bank Account mentioned while placing the Return Request and your amount will be reflected in your account within 7 working days of the details.</li>
                    <li><strong>Wallet Method:</strong> In case of wrong Bank Details, intimation will be sent for the same. If we don't receive a reply in 7 days, the amount will be transferred to your Powerlook Wallet.</li>
                </ol>

                <p className="fst-italic">
                    *E-wallet refunds will be credited to your Powerlook wallet within 2 working days after the product has been received by us.
                    <br />
                    *Once the refund is processed to the Powerlook Wallet, it will not be reversed to your bank account.
                    <br />
                    *For every used or inappropriate product received in returns from the customer, it will be returned to the customer, and shipping will be charged.
                    <br />
                    *In case the Pin Code is not serviceable for returns, the customer has to make self courier to the mentioned warehouse address, and Return Shipping charges will not be debited.
                </p>
            </div>
        </div>
    )
}

export default ReturnAndExchange