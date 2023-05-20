"use client";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import MunicipalDataList from "../components/municipal_data_list.js";

export default function Home() {
  const [municipalData, setMunicipalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://municipaldata.treasury.gov.za/api/cubes/municipalities/members/municipality";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseBody) => {
        const municipalDataObject = responseBody.data;
        setMunicipalData(municipalDataObject);
        setLoading(false);
      });
  }, []);

  const index = municipalData.map((item) => {
    item["municipality.long_name"];
  });
  const renderName = municipalData.map((item) => (
    <div key={item["municipality.name"]}>
      <a href={item["municipality.url"]}>
        {item["municipality.name"] +
          "," +
          " " +
          item["municipality.demarcation_code"]}
      </a>
    </div>
  ));

  return (
    <main>
      <div>
        <MunicipalDataList renderName={renderName} />
        <div>{loading ? <>Loading..</> : <></>}</div>
      </div>
    </main>
  );
}
