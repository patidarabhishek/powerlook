import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';
import { LoginContext } from '../../context/LoginContext';
import { toast } from 'react-toastify';
import UserDetailsModal from './UserDetailsModal';

const LoginModal = ({ show, handleClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);

  const { login } = useContext(LoginContext);

  const isValidPhone = /^\d{10}$/.test(phoneNumber);

  const handleContinue = () => {
    if (isValidPhone) {
      setShowOtp(true);
    }
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    setTimeout(() => {
      if (otp === '1234') {
        login(phoneNumber); // Simulated login
        toast.success('Login successful!');
        resetState();
  
        const hasDetails = localStorage.getItem(`userDetailsFilled_${phoneNumber}`);
        if (!hasDetails) {
          setShowUserDetailsModal(true);
        } else {
          handleClose(); // Only close if already filled
        }
      } else {
        toast.error('Invalid OTP!');
      }
      setIsSubmitting(false);
    }, 1000);
  };
  
  const resetState = () => {
    setPhoneNumber('');
    setOtp('');
    setShowOtp(false);
  };

  return (
    <>
      {/* Login Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <div className="position-relative">
          <IoMdClose
            onClick={() => {
              handleClose();
              resetState();
            }}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              fontSize: '1.5rem',
              cursor: 'pointer',
              zIndex: 1,
            }}
          />
          <Modal.Body className="px-4 py-4">
            {!showOtp ? (
              <>
                <h6 className="mb-2 text-muted fs-sm">Welcome Back!</h6>
                <h5 className="mb-4">Login or Signup to your account</h5>

                <Form>
                  <Form.Group controlId="formPhone">
                    <Form.Label
                      className="text-uppercase text-muted"
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        letterSpacing: '1px',
                      }}
                    >
                      Mobile Number <span className="text-danger">*</span>
                    </Form.Label>
                    <div className="d-flex">
                      <span className="border px-3 py-2 bg-light border-end-0 rounded-start">+91</span>
                      <Form.Control
                        type="tel"
                        maxLength="10"
                        value={phoneNumber}
                        onChange={(e) =>
                          setPhoneNumber(e.target.value.replace(/\D/g, ''))
                        }
                        placeholder="Enter your mobile number"
                        className="rounded-end"
                      />
                    </div>
                  </Form.Group>

                  <Form.Check
                    style={{ fontSize: '14px' }}
                    type="checkbox"
                    className="mt-3 text-muted"
                    label="Receive offers, and important account-related updates. T&C apply"
                    defaultChecked
                  />

                  <Button
                    variant={isValidPhone ? 'danger' : 'secondary'}
                    className="w-100 mt-4"
                    style={{
                      pointerEvents: isValidPhone ? 'auto' : 'none',
                      opacity: isValidPhone ? 1 : 0.6,
                    }}
                    onClick={handleContinue}
                  >
                    CONTINUE
                  </Button>
                </Form>
              </>
            ) : (
              <Form onSubmit={handleOtpVerify}>
                <Form.Group controlId="formOtp">
                  <Form.Label
                    className="text-uppercase text-muted"
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      letterSpacing: '1px',
                    }}
                  >
                    Enter OTP sent to +91-{phoneNumber}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    maxLength="4"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 4-digit OTP"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="danger"
                  className="w-100 mt-4"
                  disabled={otp.length !== 4 || isSubmitting}
                >
                  {isSubmitting ? 'Verifying...' : 'VERIFY & LOGIN'}
                </Button>

                <Button
                  variant="link"
                  className="text-muted mt-2 p-0"
                  onClick={() => {
                    setOtp('');
                    setShowOtp(false);
                  }}
                >
                  ← Change phone number
                </Button>
              </Form>
            )}
          </Modal.Body>
        </div>
      </Modal>

      {/* ✅ Render UserDetailsModal here */}
      {showUserDetailsModal && (
        <UserDetailsModal
          show={showUserDetailsModal}
          onClose={() =>{ setShowUserDetailsModal(false);
            handleClose();
          }} 
        />
      )}
    </>
  );
};

export default LoginModal;
