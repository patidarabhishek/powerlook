import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';

const AddressModal = ({ show, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    addressLine: '',
    city: '',
    state: '',
    pincode: '',
  });

  const isFormValid =
    formData.name.trim() &&
    formData.phone.trim().length === 10 &&
    formData.addressLine.trim() &&
    formData.city.trim() &&
    formData.state.trim() &&
    formData.pincode.trim().length === 6;

  const handleSubmit = () => {
    if (!isFormValid) return;
    onSave(formData);
    setFormData({
      name: '',
      phone: '',
      addressLine: '',
      city: '',
      state: '',
      pincode: '',
    });
  };
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ name: '', phone: '', addressLine: '', city: '', state: '', pincode: '' });
    }
  }, [initialData]);
  
  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      <div className="position-relative">
        <IoMdClose
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 1,
          }}
        />
        <Modal.Body className="px-4 pt-4 pb-3">
          <h5 className="mb-4">Add New Address</h5>
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
              <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="tel"
                maxLength={10}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address Line <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                value={formData.addressLine}
                onChange={(e) => setFormData({ ...formData, addressLine: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>State <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Pincode <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                maxLength={6}
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })
                }
              />
            </Form.Group>

            <Button
              variant="danger"
              className="w-100"
              disabled={!isFormValid}
              onClick={handleSubmit}
            >
              Save Address
            </Button>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default AddressModal;
