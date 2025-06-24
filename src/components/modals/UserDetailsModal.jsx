import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { LoginContext } from '../../context/LoginContext';

const UserDetailsModal = ({ show, onClose }) => {
  const { setUserDetails, loggedInPhone } = useContext(LoginContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    alternatePhone: ''
  });

  // Load existing data for logged-in user
  useEffect(() => {
    if (loggedInPhone) {
      const allProfiles = JSON.parse(localStorage.getItem('userProfiles') || '{}');
      const existing = allProfiles[loggedInPhone];
      if (existing) setFormData(existing);
    }
  }, [loggedInPhone]);

  const isFormValid = formData.name.trim() !== '';

  const handleSubmit = () => {
    if (!isFormValid || !loggedInPhone) return;

    const allProfiles = JSON.parse(localStorage.getItem('userProfiles') || '{}');
    allProfiles[loggedInPhone] = formData;

    localStorage.setItem('userProfiles', JSON.stringify(allProfiles));
    localStorage.setItem(`userDetailsFilled_${loggedInPhone}`, 'true'); // ✅ Mark user as filled

    setUserDetails(formData);
    onClose();
  };

  return (
    <Modal show={show} backdrop="static" keyboard={false} centered>
      <Modal.Body>
        <h5 className="mb-4">Complete Your Profile</h5>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email (optional)</Form.Label>
            <Form.Control
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address (optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Alternate Phone (optional)</Form.Label>
            <Form.Control
              type="tel"
              maxLength={10}
              value={formData.alternatePhone}
              onChange={(e) =>
                setFormData({ ...formData, alternatePhone: e.target.value.replace(/\D/g, '') })
              }
            />
          </Form.Group>
          <Button
            variant="danger"
            disabled={!isFormValid}
            onClick={handleSubmit}
            className="w-100"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserDetailsModal;
