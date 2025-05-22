import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('yes');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (fullName && phoneNumber && email && password && companyName) {
      console.log('Signup successful for:', email, fullName);
      localStorage.setItem('user', JSON.stringify({ email, name: fullName }));
      navigate('/account');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="signup-container page-container">
      <h2>Create your PopX account</h2>

      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name<span>*</span></label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number<span>*</span></label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Enter Phone No."
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address<span>*</span></label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password<span>*</span></label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company name<span>*</span></label>
          <input
            type="text"
            id="companyName"
            placeholder="Enter Company Name" 
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group radio-group">
          <label>Are you an Agency?<span>*</span></label>
          <div className="radio-options">
            <label htmlFor="agencyYes">
              <input
                type="radio"
                id="agencyYes"
                name="isAgency"
                value="yes"
                checked={isAgency === 'yes'}
                onChange={(e) => setIsAgency(e.target.value)}
              /> Yes
            </label>
            <label htmlFor="agencyNo">
              <input
                type="radio"
                id="agencyNo"
                name="isAgency"
                value="no"
                checked={isAgency === 'no'}
                onChange={(e) => setIsAgency(e.target.value)}
              /> No
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-create-account">Create Account</button>
      </form>
    </div>
  );
}

export default SignupPage;