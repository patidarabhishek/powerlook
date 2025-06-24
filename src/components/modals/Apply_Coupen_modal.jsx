import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ApplyCouponModal = ({
  show,
  handleClose,
  selectedCoupon,
  setSelectedCoupon,
  applyCoupon,
  coupons
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Apply Coupon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="couponSelect">
            <Form.Label>Select a Coupon</Form.Label>
            <Form.Select
              value={selectedCoupon}
              onChange={(e) => setSelectedCoupon(e.target.value)}
            >
              <option value="">-- Choose a coupon --</option>
              {coupons.map((coupon) => (
                <option key={coupon.code} value={coupon.code}>
                  {coupon.code} - {coupon.discountPercent}% OFF
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={applyCoupon}
          disabled={!selectedCoupon}
        >
          Apply Coupon
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyCouponModal;
