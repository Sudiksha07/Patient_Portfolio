import React, { useEffect, useState } from 'react';
import '../PersonalDetails/index.css';

import BirthIcon from '../../assets/images/BirthIcon.png'; 
import FemaleIcon from '../../assets/images/FemaleIcon.png';
import InsuranceIcon from '../../assets/images/InsuranceIcon.png';
import PhoneIcon from '../../assets/images/PhoneIcon.png';
import Profile from '../../assets/images/Layer 2.png';
import { useData } from '../../Service/DataContext';
const PersonalDetails = () => {
  const { Data } = useData();

  return (
    <div className="outer-div">
      {Data ? (
        <>
          {/* Image and Name Section */}
          <div className="image-container">
            <img src={Profile} alt="Data" className="Data-image" />
            <div className="Data-name">{Data.name}</div>
          </div>

          {/* Details Section */}
          <div className="details-box">
            {/* Date of Birth */}
            <div className="detail-item">
              <img src={BirthIcon} alt="DOB Icon" className="icon" />
              <div className="detail-text">
                <div className="heading">Date of Birth</div>
                <div className="response">{Data.date_of_birth}</div>
              </div>
            </div>

            {/* Gender */}
            <div className="detail-item">
              <img src={FemaleIcon} alt="Gender Icon" className="icon" />
              <div className="detail-text">
                <div className="heading">Gender</div>
                <div className="response">{Data.gender}</div>
              </div>
            </div>

            {/* Contact Number */}
            <div className="detail-item">
              <img src={PhoneIcon} alt="Phone Icon" className="icon" />
              <div className="detail-text">
                <div className="heading">Contact Number</div>
                <div className="response">{Data.phone_number}</div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="detail-item">
              <img src={PhoneIcon} alt="Emergency Icon" className="icon" />
              <div className="detail-text">
                <div className="heading">Emergency Contact</div>
                <div className="response">{Data.emergency_contact}</div>
              </div>
            </div>

            {/* Insurance Type */}
            <div className="detail-item">
              <img src={InsuranceIcon} alt="Insurance Icon" className="icon" />
              <div className="detail-text">
                <div className="heading">Insurance Type</div>
                <div className="response">{Data.insurance_type}</div>
              </div>
            </div>
           
          </div>
          <button className="show-info-button">Show Information</button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PersonalDetails;