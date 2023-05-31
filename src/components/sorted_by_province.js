import { Inter } from "next/font/google";
let _ = require('lodash');

export default function ProvinceSection(props) {
 
  return (
    <>
      <div>
      <h1 className="font-bold">{props.name}</h1>
      <div>
        {props.municipalities.map((item) => {
          return (
            <> 
              <div>{item["municipality.name"]}</div>
              <div>{item["municipality.demarcation_code"]}</div>  
            </>
          );
        })}
      </div>
      </div>
    </>
  );
}

