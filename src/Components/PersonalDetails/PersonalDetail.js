import React, { useEffect, useState } from 'react';
import '../PersonalDetails/index.css';
import { fetchData } from '../../Service/api';

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
          <div className="image-container">
            <img src={Profile} alt="Data" className="Data-image" />
            <div className="Data-name">{Data.name}</div>
          </div>

          <div className="Data-details">
            
            <div className="detail-item">
              <div className="icon-container">
                <img src={BirthIcon} className="icon" />
              </div>
              <div className="detail-text">
                <div className="heading">Date of Birth</div>
                <div className="response">{Data.date_of_birth}</div>
              </div>
            </div>

            {/* Gender Section */}
            <div className="detail-item">
              <div className="icon-container">
                <img src={FemaleIcon} className="icon" />
              </div>
              <div className="detail-text">
                <div className="heading">Gender</div>
                <div className="response">{Data.gender}</div>
              </div>
            </div>

            {/* Contact Number Section */}
            <div className="detail-item">
              <div className="icon-container">
                <img src={PhoneIcon} className="icon" />
              </div>
              <div className="detail-text">
                <div className="heading">Contact Number</div>
                <div className="response">{Data.phone_number}</div>
              </div>
            </div>

            {/* Emergency Contact Section */}
            <div className="detail-item">
              <div className="icon-container">
                <img src={PhoneIcon}  className="icon" />
              </div>
              <div className="detail-text">
                <div className="heading">Emergency Contact</div>
                <div className="response">{Data.emergency_contact}</div>
              </div>
            </div>

            {/* Insurance Type Section */}
            <div className="detail-item">
              <div className="icon-container">
                <img src={InsuranceIcon}  className="icon" />
              </div>
              <div className="detail-text">
                <div className="heading">Insurance Type</div>
                <div className="response">{Data.insurance_type}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default  PersonalDetails;
