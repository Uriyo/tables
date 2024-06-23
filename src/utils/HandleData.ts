// src/utils.ts
export interface CropData {
    country: string;
    year: number;
    cropName: string;
    production: number;
    yield: number;
    area: number;
  }
  
  export interface YearlyProduction {
    year: number;
    maxCrop: string;
    minCrop: string;
  }
  
  export interface CropAverage {
    crop: string;
    avgYield: number;
    avgArea: number;
  }
  
  // Function to parse the provided data and handle missing values
  export const parseData = (data: any[]): CropData[] => {
    return data.map((record) => ({
      country: record.Country,
      year: parseInt(record.Year.match(/\d{4}/)[0]), // Extracting the year from the string
      cropName: record["Crop Name"],
      production: record["Crop Production (UOM:t(Tonnes))"] ? parseFloat(record["Crop Production (UOM:t(Tonnes))"]) : 0,
      yield: record["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] ? parseFloat(record["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) : 0,
      area: record["Area Under Cultivation (UOM:Ha(Hectares))"] ? parseFloat(record["Area Under Cultivation (UOM:Ha(Hectares))"]) : 0,
    }));
  };
  
  export const calculateMaxMinProduction = (data: CropData[]): YearlyProduction[] => {
    const yearlyData: { [year: number]: { [crop: string]: number } } = {};
  
    // Aggregate data by year and crop
    data.forEach((record) => {
      if (!yearlyData[record.year]) {
        yearlyData[record.year] = {};
      }
      if (!yearlyData[record.year][record.cropName]) {
        yearlyData[record.year][record.cropName] = 0;
      }
      yearlyData[record.year][record.cropName] += record.production;
    });
  
    const result: YearlyProduction[] = [];
  
    // Calculate max and min production for each year
    Object.keys(yearlyData).forEach((year) => {
      const crops = yearlyData[parseInt(year)];
      const maxCrop = Object.keys(crops).reduce((a, b) => (crops[a] > crops[b] ? a : b));
      const minCrop = Object.keys(crops).reduce((a, b) => (crops[a] < crops[b] ? a : b));
      result.push({
        year: parseInt(year),
        maxCrop,
        minCrop,
      });
    });
  
    return result;
  };
  
  export const calculateAverageYieldAndArea = (data: CropData[]): CropAverage[] => {
    const cropData: { [crop: string]: { totalYield: number; totalArea: number; count: number } } = {};
  
    // Aggregate data by crop
    data.forEach((record) => {
      if (!cropData[record.cropName]) {
        cropData[record.cropName] = { totalYield: 0, totalArea: 0, count: 0 };
      }
      cropData[record.cropName].totalYield += record.yield;
      cropData[record.cropName].totalArea += record.area;
      cropData[record.cropName].count += 1;
    });
  
    const result: CropAverage[] = [];
  
    // Calculate average yield and area for each crop
    Object.keys(cropData).forEach((crop) => {
      const cropRecord = cropData[crop];
      result.push({
        crop,
        avgYield: parseFloat(
          (cropRecord.totalYield / cropRecord.count).toFixed(3)
        ),
        avgArea: parseFloat(
          (cropRecord.totalArea / cropRecord.count).toFixed(3)
        ),
      });
    });
  
    return result;
  };
  