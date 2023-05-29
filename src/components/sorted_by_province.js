import { Inter } from "next/font/google";
let _ = require('lodash');

export default function ProvinceSection(props) {
  
  return (
    <>
      <h1 className="font-bold" >{props.name}</h1>
      <div>
        {props.municipalities.map((item) => {
          return (
            <> 
              <div key={item["municipality.demarcation_code:"]}></div>
              <div>{item["municipality.name"]}</div>
              <div>{item["municipality.demarcation_code"]}</div>
            </>
          );
        })}
      </div>
    </>
  );
}
/*
<div>{data.map((item) => (
          <div className="wrapper" key={item.id}>
            <div className="product-card"></div>
            </div>)}
            </div>*/
