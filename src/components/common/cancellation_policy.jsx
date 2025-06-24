import React from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CancellationPolicy = () => {
    return (
        <div className='container ' style={{ marginTop: '120px', paddingBottom: '100px' }}>

            <h2 className="mb-5 text-center">Cancellation Policy</h2>
            <p style={{ fontSize: '16px', fontWeight: '600', color: '#555454', lineHeight: '1.5' }}>
                Powerlook reserve right to cancel any order without any explanation. We ensure you, communication of cancelation of an order or refund will be done in a reasonable time.
                <br /><br />
                1) You can cancel the order from the <Link to="/my_orders">My Order</Link> section in <Link to="/profile">Account</Link> before the order is dispatched.
                <br /><br />
                2) If the order status is marked as "Ready to Ship", we won't be able to cancel it. However, you can refuse to accept the shipment and the amount will be refunded to your account.
                <br /><br />
                3) The full amount will be refunded to your account, including your shipping charges if any.
                <br /><br />
                *If your query is not solved you can email us all details or also, you can contact our customer service representative directly at +91 9696333000 between 10.30 am to 06.00 pm (Monday - Saturday).
            </p>
        </div>
    )
}

export default CancellationPolicy