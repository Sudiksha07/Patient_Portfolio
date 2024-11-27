// DataContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchData } from './api';

const DataContext = createContext(); // Create a context for data

export const useData = () => {
  return useContext(DataContext); // Custom hook to use context easily
};

export const DataProvider = ({ children }) => {
    const [diagnosticData, setDiagnosticData] = useState([]);
    const [Data, setData] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0); // New state to store the index

  const updateIndex = (index) => {
    setSelectedIndex(index);
  };
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetchData();
          const jessicaData = response[0];
          setData(jessicaData);
  
          const formattedData = jessicaData.diagnosis_history
            ?.slice(0, 6)
            .map((entry) => ({
              month: `${entry.month} ${entry.year}`,
              systolic: entry.blood_pressure.systolic.value,
              systolicLevel: entry.blood_pressure.systolic.levels,
              diastolic: entry.blood_pressure.diastolic.value,
              diastolicLevel: entry.blood_pressure.diastolic.levels,
              respiratory: entry.respiratory_rate.value,
              respiratoryLevel: entry.respiratory_rate.levels,
              heartrate: entry.heart_rate.value,
              heartrateLevel: entry.heart_rate.levels,
              temperature: entry.temperature.value,
              temperatureLevel: entry.temperature.levels,
            }));
  
          setDiagnosticData(formattedData || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      getData();
    }, []);
  
    return (
      <DataContext.Provider value={{ Data, diagnosticData,selectedIndex, updateIndex  }}>
        {children}
      </DataContext.Provider>
    );
  };
