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

   
  let auditedActualAmounts = municipalAmount.map((item) => {
    return item;
  }).filter(item => 
   item["amount_type.label"] == "Audited Actual" &&
   item["financial_year_end.year"] == 2021 &&
   item["item.label"] == "Cash/cash equivalents at the year end:"
    );
   // const filtered_students = students.filter(item => item.marks > 90);

  console.log(auditedActualAmounts);

  /*let financialYearEnd = auditedActualAmounts.map((item) => {
    return item;
  }).filter(item => 
   item["financial_year_end.year"] == 2021
    );

    console.log(financialYearEnd);*/


  return (
    <main>
      <div>
        <div>{loading ? <>Loading..</> : <>{console.log("save")}</>}</div>
        <div>
          {Object.keys(provinceGroups).map((provinceName) => {
            return (
              <ProvinceSection
                key={provinceName}
                name={provinceName}
                municipalities={provinceGroups[provinceName]}
              />
            );
          })}
        </div>
        <div>{auditedActualAmounts.map((provinceAmount) => {
          return (
            <>
            <div className="font-bold">{provinceAmount["demarcation.label"]}</div>
            <div>{provinceAmount["amount_type.label"]}</div>
            <div>{provinceAmount["amount"]}</div>
            </>
          )
        })}</div>
      </div>
    </main>
  );
}
