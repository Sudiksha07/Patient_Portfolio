import React, { useEffect, useState } from 'react';
import { fetchData } from '../../Service/api';
import styles from '../DiagnosticList/DiagnosticList.module.css';
import { useData } from '../../Service/DataContext';

const DiagnosticList = () => {
  
  const { Data } = useData(); 
  const [loading, setLoading] = useState(true);

  
  const diagnosticList = Data?.diagnostic_list || [];

  
  useEffect(() => {
    if (Data) {
      setLoading(false); // Stop loading when Data is available
    }
  }, [Data]);

  
  if (loading) return <div className={styles.noData}>Loading...</div>
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Diagnostic List</h2>
      
      {/* Separate Header */}
      <div className={styles.headerContainer}>
        <div className={`${styles.th} ${styles.column1}`}>Problem/Diagnosis</div>
        <div className={`${styles.th} ${styles.column2}`}>Description</div>
        <div className={`${styles.th} ${styles.column3}`}>Status</div>
      </div>

      {/* Table Body */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody>
            {diagnosticList.length > 0 ? (
              diagnosticList.map((item, index) => (
                <tr key={index} className={styles.tr}>
                  <td className={`${styles.td} ${styles.column1}`} style={{width:'161px'}}>{item.name}</td>
                  <td className={`${styles.td} ${styles.column2}`}>{item.description}</td>
                  <td className={`${styles.td} ${styles.column3}`}>{item.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className={styles.noData}>
                  No diagnostic data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
