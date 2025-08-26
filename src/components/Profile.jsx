import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    emergencyContact: '',
    medicalHistory: '',
    allergies: '',
    currentMedications: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!profileData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!profileData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!profileData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(profileData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!profileData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!profileData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (!profileData.gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      setIsSaved(true);
      setIsEditing(false);
      
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsSaved(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setErrors({});
  };

  return (
    <div className="profile-page">
      <Container>
        <Row className="profile-header">
          <Col md={12}>
            <h1>Patient Profile</h1>
            <p>Manage your personal and medical information</p>
          </Col>
        </Row>

        {isSaved && (
          <Alert variant="success" className="mt-3">
            Profile updated successfully!
          </Alert>
        )}

        <Row>
          <Col lg={8} md={12}>
            <Card className="profile-card">
              <Card.Header>
                <h3>Personal Information</h3>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={profileData.firstName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={profileData.lastName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={profileData.email}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth *</Form.Label>
                        <Form.Control
                          type="date"
                          name="dateOfBirth"
                          value={profileData.dateOfBirth}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          isInvalid={!!errors.dateOfBirth}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.dateOfBirth}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Gender *</Form.Label>
                        <Form.Select
                          name="gender"
                          value={profileData.gender}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          isInvalid={!!errors.gender}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.gender}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="address"
                      value={profileData.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Emergency Contact</Form.Label>
                    <Form.Control
                      type="text"
                      name="emergencyContact"
                      value={profileData.emergencyContact}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      placeholder="Name and phone number"
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>

            <Card className="profile-card mt-4">
              <Card.Header>
                <h3>Medical Information</h3>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Medical History</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="medicalHistory"
                    value={profileData.medicalHistory}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder="Any previous medical conditions, surgeries, etc."
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Allergies</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="allergies"
                    value={profileData.allergies}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder="Any known allergies to medications, foods, etc."
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Current Medications</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="currentMedications"
                    value={profileData.currentMedications}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder="List of current medications and dosages"
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={12}>
            <Card className="profile-actions">
              <Card.Body>
                <h4>Profile Actions</h4>
                <div className="action-buttons">
                  {!isEditing ? (
                    <Button 
                      variant="primary" 
                      onClick={handleEdit}
                      className="w-100 mb-3"
                    >
                      <i className="fa-solid fa-edit"></i> Edit Profile
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="success" 
                        onClick={handleSave}
                        className="w-100 mb-3"
                      >
                        <i className="fa-solid fa-save"></i> Save Changes
                      </Button>
                      <Button 
                        variant="secondary" 
                        onClick={handleCancel}
                        className="w-100"
                      >
                        <i className="fa-solid fa-times"></i> Cancel
                      </Button>
                    </>
                  )}
                </div>

                <hr />

                <div className="profile-stats">
                  <h5>Profile Status</h5>
                  <div className="stat-item">
                    <span className="stat-label">Profile Completion:</span>
                    <span className="stat-value">85%</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Last Updated:</span>
                    <span className="stat-value">Today</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Account Status:</span>
                    <span className="stat-value active">Active</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
