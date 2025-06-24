import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ShippingPolicy = () => {
  return (
    <>
      <h2 className="text-center color-black" style={{marginTop:'120px'}} >Shipping Policy</h2>
    <Container className="" style={{fontSize: '16px', fontWeight: '600', color: '#555454', lineHeight: '1.8',marginTop:'40px' }}>

      <div className="mb-4">
        <p>
          At <strong>Powerlook</strong>, we aim to deliver your orders quickly and efficiently by collaborating with the best courier partners.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Standard Delivery</h5>
        <ul>
          <li>We process and dispatch orders within <strong>24-48 hours</strong>.</li>
          <li>Delivery times vary based on your location:</li>
        </ul>

        <Table striped bordered className="mt-3" style={{ maxWidth: '600px' }}>
          <thead>
            <tr>
              <th>Location</th>
              <th>Delivery Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mumbai</td>
              <td>3-4 working days</td>
            </tr>
            <tr>
              <td>Metro Cities</td>
              <td>5-7 working days</td>
            </tr>
            <tr>
              <td>Other Regions</td>
              <td>Up to 10 working days</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Shipping Charges</h5>
        <p>Shipping is <strong>Free</strong> on all orders.</p>

        <h5 className="fw-semibold mt-3">COD Fee</h5>
        <p>A flat <strong>Rs. 100</strong> will be charged for Cash on Delivery orders.</p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Delivery Time Details</h5>
        <ul>
          <li>Delivery times are calculated in <strong>business days</strong> (excluding weekends and public holidays).</li>
          <li>External factors like weather or logistical issues may cause delays. We appreciate your understanding in such cases.</li>
          <li>For any concerns, contact our <strong>customer support</strong>. We're here to ensure a smooth shopping experience with Powerlook.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Self-Shipping for Returns</h5>
        <p>
          If your pincode is not serviceable for reverse pickup, you may courier the item(s) to the address below:
        </p>
        <p className="mb-1"><strong>Powerlook Apparels Pvt. Ltd.</strong></p>
        <p className="mb-1">Warehouse: Prozo Distribution Pvt. Ltd.</p>
        <p className="mb-1">Building B, Infinity Logipark,</p>
        <p className="mb-1">Kalyan Padgha Road, Amane,</p>
        <p className="mb-1">Bhiwandi - 421 302 (Dist. Thane)</p>

        <p className="mt-3">
          Please ensure:
        </p>
        <ul>
          <li>The items are securely packed to prevent damage/loss in transit.</li>
          <li>The <strong>ORDER ID</strong> and <strong>registered mobile number</strong> are clearly mentioned on the packaging.</li>
          <li>Items are in unused condition with original tags and packaging intact.</li>
        </ul>
        <p>
          If everything is in order, the <strong>full product price</strong> will be refunded within <strong>48 hours</strong> after we receive the items. No ₹100 reverse pickup charge will be deducted.
        </p>
        <p className="fst-italic">
          *Avoid using "The Professional Couriers" for returns as they are unreliable. We recommend <strong>India Post (Speed Post)</strong> for safe and economical returns.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Reasons for Failed Delivery</h5>
        <ul>
          <li>Incorrect or incomplete address details.</li>
          <li>The recipient was unavailable or the phone number was incorrect.</li>
          <li>Delivery address falls in a restricted area.</li>
          <li>Payment not made at delivery for COD orders.</li>
          <li>The recipient has moved or relocated.</li>
        </ul>
        <p className="fw-semibold text-danger">
          Note: If delivery fails after <strong>three attempts</strong>, the order will be <strong>cancelled</strong>.
        </p>
      </div>
    </Container>
    </>
  );
};

export default ShippingPolicy;
