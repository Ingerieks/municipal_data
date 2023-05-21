"use client";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import MunicipalDataList from "../components/municipal_data_list.js";
//import SortedByProvince from "../components/sorted_by_province.js"
import WesternCapeProvince from "@/components/western_cape.js";
import EasternCapeProvince from "@/components/eastern_cape.js";
import NorthernCapeProvince from "@/components/northern_cape.js";
import FreestateProvince from "@/components/freestate.js";
import KwazuluNatalProvince from "@/components/kwazulu_natal.js";
import GautengProvince from "@/components/gauteng.js";
import LimpopoProvince from "@/components/limpopo.js";
import MpumalangaProvince from "@/components/mpumalanga.js";
import NorthWestProvince from "@/components/north_west.js";

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
        setMunicipalData(municipalDataObject)
        setLoading(false);
      });
  }, []);

  const renderName = municipalData.map((item) => (
    <div key={item["municipality.name"]} name={item["municipality.province_name"]}>
      <a href={item["municipality.url"]}>
        <div>{item["municipality.name"]}</div>
        <div>{item["municipality.demarcation_code"]}</div>
      </a>
    </div>
  ));
  

  return (
    <main>
      <div>
        <div>{loading ? <>Loading..</> : <></>}</div>
        <EasternCapeProvince municipalData={municipalData}  />
        <FreestateProvince municipalData={municipalData}  />
        <GautengProvince municipalData={municipalData}  />
        <KwazuluNatalProvince municipalData={municipalData}  />
        <LimpopoProvince municipalData={municipalData}  />
        <MpumalangaProvince municipalData={municipalData}  />
        <NorthernCapeProvince municipalData={municipalData}  />
        <NorthWestProvince municipalData={municipalData}  />
        <WesternCapeProvince municipalData={municipalData}  />
      </div>
    </main>
  );
}
