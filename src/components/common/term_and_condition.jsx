import React from 'react';
import { Container } from 'react-bootstrap';

const TermsAndConditions = () => {
  return (
    <>
      <h2 className="text-center" style={{marginTop: '120px'}}>Terms & Conditions</h2>
    <Container className="my-5" style={{  lineHeight: '1.8', fontSize: '16px',marginBottom:'100px',color:'#555454' }}>

      <div className="mb-4">
        <p>
          Access to and use of <strong>Powerlook.in</strong> and its products/services are governed by the following Terms of Service. By using this website, you agree to these Terms, along with our Privacy Policy. We may revise these Terms occasionally. Please check this page regularly.
        </p>
        <p>
          We reserve the right to amend or withdraw services without notice and are not liable if the website is unavailable at any time. Access may be restricted periodically.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Privacy</h5>
        <p>
          Our Privacy Policy explains how we use your personal data. By using this site, you agree to our Privacy Policy and confirm that the information you provide is accurate.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Product Accuracy</h5>
        <p>
          Images are for illustrative purposes only. We try to display colors as accurately as possible, but variations may occur. Sizes and measurements are approximate. We aim for all details, prices, and descriptions to be correct and up to date.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Pricing</h5>
        <p>
          Prices listed are inclusive of GST and are accurate to the best of our knowledge. If a pricing error is found post-order, we will notify you. If unreachable, the order will be canceled and a full refund issued.
        </p>
        <p>
          Prices may change without prior notice but do not affect dispatched orders.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Discounts and Vouchers</h5>
        <p>
          Any discount or voucher applied will not be refunded on canceled or returned orders.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Payment</h5>
        <p>
          Orders undergo pre-authorization checks to verify available funds. Products are dispatched only after successful authorization. Payment options include:
        </p>
        <ul>
          <li>UPI</li>
          <li>Debit/Credit Cards</li>
          <li>Cash on Delivery</li>
          <li>Net Banking</li>
          <li>EMI</li>
          <li>Powerlook Wallet</li>
        </ul>
        <p>
          A flat ₹100 COD charge applies. In case of payment deduction during a failed attempt, the amount is typically reversed within 7 business days. For concerns, contact <a href="mailto:support@powerlook.in">support@powerlook.in</a>.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Violation & Termination</h5>
        <p>
          We reserve the right to terminate your access if Terms are violated. Termination does not affect payments already made. Contact us at <a href="mailto:support@powerlook.in">support@powerlook.in</a> for any clarifications.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Order Status</h5>
        <p>
          You can view your order status under the “Order History” section.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Service & Complaints</h5>
        <p>
          We prioritize your satisfaction. Reach out to <a href="mailto:support@powerlook.in">support@powerlook.in</a> for any service-related concerns.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Incorrect or Damaged Product</h5>
        <p>
          If you receive a damaged or incorrect item, notify us the same day via email or phone. Late reports will not be accepted for return or replacement.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Returns</h5>
        <p>
          Products purchased online cannot be returned at physical stores.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Disclaimer of Guarantee</h5>
        <p>
          We do not guarantee uninterrupted service. All services and products are provided "as is" without any express or implied warranties unless explicitly stated.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Registered Address</h5>
        <p>
          Powerlook Apparels Pvt Ltd, Shop No. 11A, Dhawalgiri Building,<br />
          Apna Ghar Unit No. 8, C Swami Samarth Nagar,<br />
          Andheri West, Mumbai 400053
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Jurisdiction & Liability</h5>
        <p>
          This website is governed by Indian laws. Powerlook is not responsible for user content, collaborations, or user inactions. While we strive for safe and uninterrupted access, we cannot guarantee it. We disclaim liability for damages resulting from your use of the website.
        </p>
        <p>
          Always ensure that your use of this website is legal in your jurisdiction. We are not liable for computer damage, data loss, or service failures due to external interference.
        </p>
      </div>
    </Container>
    </>
  );
};

export default TermsAndConditions;
