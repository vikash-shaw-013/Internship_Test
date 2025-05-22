import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountSettingsPage.css';
import profilePic from '../assets/profile-placeholder.svg';

function AccountSettingsPage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) {
    return <div className="loading-container page-container">Loading...</div>;
  }

  return (
    <div className="account-settings-container page-container">
      <h2>Account Settings</h2>
      <div className="profile-section">
        <div className="profile-image-container"> {/* Changed class name */}
          <img src={user.profileImageUrl || profilePic} alt={`${user.name}'s profile`} className="profile-image" /> {/* Changed class name, added fallback for user profile image */}
          <div className="camera-icon-overlay"> {/* Added div for camera icon overlay */}
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
              <path d="M12 14c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
            </svg>
          </div>
        </div>
        <div className="profile-info">
          <p className="user-name">{user.name}</p> {/* Changed h3 to p and added class */}
          <p className="user-email">{user.email}</p> {/* Added class */}
        </div>
      </div>
      <div className="description-section">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      <hr className="divider" />
    </div>
  );
}

export default AccountSettingsPage;