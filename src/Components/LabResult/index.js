import React, { useEffect, useState } from 'react';
import '../LabResult/index.css';
import { fetchData } from '../../Service/api';
import download from '../../assets/images/download.png';
import { useData } from '../../Service/DataContext';


const LabResults = () => {
  const { Data } = useData();
  const [labResults, setLabResults] = useState([]);

  useEffect(() => {
    if (Data?.lab_results) {
      setLabResults(Data.lab_results);
    }
  }, [Data]);

  return (
    <div className="lab-results-container">
      <p className="headinglab">Lab Results</p>
      <div className="lab-results-list">
        {labResults.length > 0 ? (
          labResults.map((result, index) => (
            <div key={index} className="lab-result-item">
              <span className="result-name">{result}</span>
              <img src={download} alt="Download" className="download-icon" />
            </div>
          ))
        ) : (
          <div>No results available</div>
        )}
      </div>
    </div>
  );
};

export default LabResults;

