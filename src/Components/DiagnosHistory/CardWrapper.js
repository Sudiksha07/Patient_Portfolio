import React, { useState, useEffect } from 'react';
import { useData } from '../../Service/DataContext';
import Card from './card';
import temperature from '../../assets/images/temperature.png';
import respiratory from '../../assets/images/respiratory.png';
import HeartBPM from '../../assets/images/HeartBPM.png';

export default function CardWrapper() {
  const { selectedIndex, diagnosticData } = useData(); // Access data from context
  const [values, setValues] = useState({
    temperature: null,
    heartrate: null,
    respiratoryrate: null,
  });
  const [level, setLevel] = useState({
    temperatureLevel: null,
    heartrateLevel: null,
    respiratoryrateLevel: null,
  });

  // UseEffect to update `values` and `level` when `selectedIndex` or `diagnosticData` changes
  useEffect(() => {
    if (diagnosticData.length > 0 && selectedIndex >= 0) {
      // Update values
      setValues({
        temperature: diagnosticData[selectedIndex].temperature,
        heartrate: diagnosticData[selectedIndex].heartrate,
        respiratoryrate: diagnosticData[selectedIndex].respiratory,
      });

      // Update levels
      setLevel({
        temperatureLevel: diagnosticData[selectedIndex].temperatureLevel,
        heartrateLevel: diagnosticData[selectedIndex].heartrateLevel,
        respiratoryrateLevel: diagnosticData[selectedIndex].respiratoryLevel,
      });
    }
  }, [selectedIndex, diagnosticData]); // Dependencies: selectedIndex and diagnosticData

  return (
    <div  style={{display:"flex",justifyContent:"space-between",gap:"100px",margin:"15px "}}>
         <Card
        cardname="Respiratory Rate"
        background="#E0F3FA"
        image={respiratory}
        heading={`${values.respiratoryrate || '--'} bpm`}
        subHeading={level.respiratoryrateLevel || 'Unknown'}
      />
      <Card
        cardname="Temperature"
        background="#FFE6E9"
        image={temperature}
        heading={`${values.temperature || '--'} F`}
        subHeading={level.temperatureLevel || 'Unknown'}
      />
     
      <Card
        cardname="Heart Rate"
        background="#FFE6F1"
        image={HeartBPM}
        heading={`${values.heartrate || '--'} BPM`}
        subHeading={level.heartrateLevel || 'Unknown'}
      />
    </div>
  );
}
