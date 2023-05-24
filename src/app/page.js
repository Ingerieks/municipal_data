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
import ProvinceSections from "@/components/sorted_by_province.js";

let _ = require('lodash');

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
      fetch(
        "https://municipaldata.treasury.gov.za/api/cubes/financial_position_v2/facts"
      ),
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

  return (
    <main>
      <div>
        <div>{loading ? <>Loading..</> : <></>}</div>
        
        <ProvinceSections provinceGroups={provinceGroups}
        />
      </div>
    </main>
  );
}

//<div>{organisedByProvince}</div>