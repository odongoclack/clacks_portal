import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
          setFormData({
            name: data.name || '',
            email: data.email || '',
            major: data.major || '',
            phone: data.phone || '',
            address: data.address || ''
          });
        }
      } catch (error) {
        console.error('Failed to fetch profile data:', error);
        setError('Failed to load profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/profile/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Profile update failed');
      }
      
      setProfileData({...profileData, ...formData});
      setIsEditing(false);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Student Profile</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="profile-card">
        {!isEditing ? (
          <>
            <div className="profile-header">
              <div className="profile-avatar">
                <span>{profileData?.name?.charAt(0) || 'S'}</span>
              </div>
              <div className="profile-title">
                <h2>{profileData?.name}</h2>
                <p>Student ID: {profileData?.studentId}</p>
              </div>
              <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit Profile</button>
            </div>
            
            <div className="profile-details">
              <div className="profile-info-group">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> {profileData?.email}</p>
                <p><strong>Phone:</strong> {profileData?.phone || 'Not provided'}</p>
                <p><strong>Address:</strong> {profileData?.address || 'Not provided'}</p>
              </div>
              
              <div className="profile-info-group">
                <h3>Academic Information</h3>
                <p><strong>Major:</strong> {profileData?.major}</p>
                <p><strong>Year:</strong> {profileData?.year || 'Not provided'}</p>
                <p><strong>GPA:</strong> {profileData?.gpa || 'Not available'}</p>
              </div>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="profile-edit-form">
            <h2>Edit Profile</h2>
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="major">Major</label>
              <input
                type="text"
                id="major"
                name="major"
                value={formData.major}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
              <button type="submit" className="btn-primary">Save Changes</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;