import React, { useState, useEffect, useContext } from 'react';
import WishlistNavbar from '../wishlist_navbar';
import { Row } from 'react-bootstrap';
import AddressModal from '../../modals/Address_modal';
import { LoginContext } from '../../../context/LoginContext';

const MyAddress = () => {
  const [showModal, setShowModal] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editAddressData, setEditAddressData] = useState(null);
  const { loggedInPhone } = useContext(LoginContext);

  // Load addresses from localStorage
  useEffect(() => {
    if (loggedInPhone) {
      const allData = JSON.parse(localStorage.getItem('userAddresses') || '{}');
      const userAddresses = allData[loggedInPhone] || [];
      setAddresses(userAddresses);
    }
  }, [loggedInPhone]);

  const saveToLocalStorage = (updatedAddresses) => {
    const allData = JSON.parse(localStorage.getItem('userAddresses') || '{}');
    allData[loggedInPhone] = updatedAddresses;
    localStorage.setItem('userAddresses', JSON.stringify(allData));
  };

  const handleSaveAddress = (newAddress) => {
    let updated;

    if (editIndex !== null) {
      // Update existing address
      updated = [...addresses];
      updated[editIndex] = newAddress;
    } else {
      // Add new address
      updated = [...addresses, newAddress];
    }

    setAddresses(updated);
    saveToLocalStorage(updated);
    setShowModal(false);
    setEditIndex(null);
    setEditAddressData(null);
  };

  const handleDeleteAddress = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
    saveToLocalStorage(updated);
  };

  const handleEditAddress = (index) => {
    setEditIndex(index);
    setEditAddressData(addresses[index]);
    setShowModal(true);
  };

  return (
    <div className="container" style={{ marginTop: '120px', paddingBottom: '60px' }}>
      <Row>
        <WishlistNavbar />

        <div className="col-md-8 px-4">
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className="mb-3">My Addresses</h3>
            <button
              className='btn btn-danger'
              onClick={() => {
                setEditIndex(null);
                setEditAddressData(null);
                setShowModal(true);
              }}
            >
              Add New Address
            </button>
          </div>

          {addresses.length > 0 ? (
            <div className='mt-4'>
              {addresses.map((addr, idx) => (
                <div key={idx} className='d-flex justify-content-between border rounded p-3 mb-3'>
                  <div>
                    <p className='mb-1 fw-bold'>{addr.name}</p>
                    <div>{addr.addressLine}</div>
                    <div>{addr.city}, {addr.state} - {addr.pincode}</div>
                    <p className='mt-1'>Mobile : {addr.phone}</p>
                  </div>
                  <div className='d-flex flex-column gap-2'>
                    <button
                      className='btn btn-outline-secondary btn-sm'
                      onClick={() => handleEditAddress(idx)}
                    >
                      Edit
                    </button>
                    <button
                      className='btn btn-danger btn-sm'
                      onClick={() => handleDeleteAddress(idx)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted">No addresses added yet.</p>
          )}
        </div>
      </Row>

      <AddressModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setEditIndex(null);
          setEditAddressData(null);
        }}
        onSave={handleSaveAddress}
        initialData={editAddressData}
      />
    </div>
  );
};

export default MyAddress;
