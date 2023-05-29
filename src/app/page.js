"use client";
import { useState, useEffect } from "react";
import { render } from "react-dom";

import ProvinceSection from "@/components/sorted_by_province.js";

let _ = require("lodash");

export default function Home() {
  const [municipalData, setMunicipalData] = useState([]);
  const [municipalAmount, setMunicipalAmount] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(
        "https://municipaldata.treasury.gov.za/api/cubes/municipalities/members/municipality"
      ),
      fetch("https://municipaldata.treasury.gov.za/api/cubes/cflow_v2/facts"),
    ])
      .then(([resNames, resAmounts]) =>
        Promise.all([resNames.json(), resAmounts.json()])
      )
      .then(([dataNames, dataAmounts]) => {
        const municipalDataObject = dataNames.data;
        const municipalAmountObject = dataAmounts.data;
        setMunicipalData(municipalDataObject);
        setMunicipalAmount(municipalAmountObject);
        setLoading(false);
      });
  }, []);

  const provinceGroups = _.groupBy(
    municipalData,
    (muni) => muni["municipality.province_name"]
  );

  console.log(provinceGroups);
  
  return (
    <main>
      <div>
        <div>{loading ? <>Loading..</> : <></>}</div>
        <div>
          {Object.keys(provinceGroups).map((provinceName) => {
          return <ProvinceSection
              name={provinceName}
              municipalities={provinceGroups[provinceName]}
            />;
          })}
        </div>
      </div>
    </main>
  );
}
