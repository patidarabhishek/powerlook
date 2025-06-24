import React, { useContext, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import WishlistNavbar from '../wishlist_navbar';
import { LoginContext } from '../../../context/LoginContext';
import EditProfileModal from '../../modals/EditProfileModal';

const Profile = () => {
  const { user, userDetails, setUserDetails } = useContext(LoginContext);
  const [showModal, setShowModal] = useState(false);
  const phone = user?.phone;

  const profile = userDetails || {};

  const handleSave = (updatedData) => {
    setUserDetails(updatedData);
  };

  return (
    <div className="container" style={{ marginTop: '120px', paddingBottom: '60px' }}>
      <Row>
        <WishlistNavbar />

        <div className="col-md-8 px-4">
          <h3 className="mb-3">My Profile</h3>
          <p className="text-muted mb-4">You can edit/update your profile information.</p>

          <Row className="mb-3">
            <Col md={4}><strong>Full Name</strong></Col>
            <Col md={8}>{profile.name || '—'}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><strong>Email</strong></Col>
            <Col md={8}>{profile.email || '—'}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><strong>Phone Number</strong></Col>
            <Col md={8}>+91 {phone || 'N/A'}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><strong>Alternate Phone</strong></Col>
            <Col md={8}>{profile.alternatePhone || '—'}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><strong>Date of Birth</strong></Col>
            <Col md={8}>{profile.dob || '—'}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><strong>Gender</strong></Col>
            <Col md={8}>{profile.gender || '—'}</Col>
          </Row>

          <Button variant="danger" className="w-100" onClick={() => setShowModal(true)}>
            EDIT PROFILE
          </Button>
        </div>
      </Row>

      {/* Edit Profile Modal */}
      <EditProfileModal
        show={showModal}
        onClose={() => setShowModal(false)}
        userPhone={phone}
        initialData={profile}
        onSave={handleSave}
      />
    </div>
  );
};

export default Profile;
