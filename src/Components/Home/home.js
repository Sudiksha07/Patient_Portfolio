import React from "react";
import "../Home/home.css";
import RespiratoryCards from "../DiagnosHistory/respiratory";
import TemperatureCards from "../DiagnosHistory/temperate";
import HeartRateCards from "../DiagnosHistory/heartrate";
import  DiagnosticList from "../DiagnosticList/DiagnosticList";
import Index from "../PersonalDetails/PersonalDetail";
import LabResults from "../LabResult";
import CardWrapper from "../DiagnosHistory/CardWrapper";
import Graph from "../DiagnosHistory/Graph";
const HomePage = () => {
  return (
    <div className="container">
      
      <div className="left-column">
        <div className="left-top">
          <h2>Diagnosis History
            </h2><Graph/></div>
        <div className="left-middle">
      <CardWrapper/></div>
        <div className="left-bottom">
            <DiagnosticList/>
        </div>
      </div>

      
      <div className="right-column">
        <div className="right-top"><Index/></div>
        <div className="right-bottom"><LabResults/></div>
      </div>
    </div>
  );
};

export default HomePage;

