
import React, { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import {
  parseData,
  calculateMaxMinProduction,
  calculateAverageYieldAndArea,
  CropData,
  YearlyProduction,
  CropAverage,
} from "../utils/HandleData";

import styles from './AnalyticsTables.module.css';

const fetchData = async (): Promise<CropData[]> => {
  const response = await fetch('/Data.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const rawData = await response.json();
  return parseData(rawData);
};

const AnalyticsTables: React.FC = () => {
  const [yearlyData, setYearlyData] = useState<YearlyProduction[]>([]);
  const [avgData, setAvgData] = useState<CropAverage[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setYearlyData(calculateMaxMinProduction(data));
      setAvgData(calculateAverageYieldAndArea(data));
    });
  }, []);

  return (
    <>
      <div className={styles.table}>
        
        <h2>Yearly Production</h2>
        <Table>
          <thead>
            <tr>
              <th className={styles.th}>Year</th>
              <th className={styles.th}>Crop with Maximum Production in that year</th>
              <th className={styles.th}>Crop with Minimum Production in that year</th>
            </tr>
          </thead>
          <tbody>
            {yearlyData.map((row) => (
              <tr key={row.year} className={styles.rowHover}>
                <td className={styles.td}>{row.year}</td>
                <td className={styles.td}>{row.maxCrop}</td>
                <td className={styles.td}>{row.minCrop}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={styles.table}>
        <h2>Average Yield and Cultivation Area (1950-2020)</h2>
        <Table horizontalSpacing="lg">
          <thead>
            <tr>
              <th className={styles.th}>Crop</th>
              <th className={styles.th}>Average Yield of the Crop</th>
              <th className={styles.th}>Average Cultivation Area of the crop</th>
            </tr>
          </thead>
          <tbody>
            {avgData.map((row) => (
              <tr key={row.crop} className={styles.rowHover}>
                <td className={styles.td}>{row.crop}</td>
                <td className={styles.td}>{row.avgYield}</td>
                <td className={styles.td}>{row.avgArea}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AnalyticsTables;
