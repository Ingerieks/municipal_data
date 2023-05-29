import { Eater } from "next/font/google";

export default function ProvinceSections(props) {
  const easternCape = props.provinceGroups["Eastern Cape"];
  const westernCape = props.provinceGroups["Western Cape"];
  const northernCape = props.provinceGroups["Northern Cape"];
  const northWest = props.provinceGroups["North West"];
  const freeState = props.provinceGroups["Free State"];
  const kwazuluNatal = props.provinceGroups["Kwazulu-Natal"];
  const mpumalanga = props.provinceGroups["Mpumalanga"];
  const gauteng = props.provinceGroups["Gauteng"];
  const limpopo = props.provinceGroups["Limpopo"];

  return (
    <>
      <h1 className="font-bold" >Eastern Cape</h1>
      <div>
        {easternCape.map((item) => {
          return (
            <> 
              <div>{item["municipality.name"]}</div>
              <div>{item["municipality.demarcation_code"]}</div>
            </>
          );
        })}
      </div>
      <h1 className="font-bold" >Free State</h1>
      <div>
        {freeState.map((item) => {
          return (
            <> 
              <div>{item["municipality.name"]}</div>
              <div>{item["municipality.demarcation_code"]}</div>
            </>
          );
        })}
      </div>
      <h1 className="font-bold" >Gauteng</h1>
      <div>
        {gauteng.map((item) => {
          return (
            <> 
              <div>{item["municipality.name"]}</div>
              <div>{item["municipality.demarcation_code"]}</div>
            </>
          );
        })}
      </div>
      <h1 className="font-bold" >Kwazulu-Natal</h1>
      <div>
        {kwazuluNatal.map((item) => {
          return (
            <> 
              <div>{item["municipality.name"]}</div>
              <div>{item["municipality.demarcation_code"]}</div>
            </>
          );
        })}
      </div>
      <h1 className="font-bold" >Limpopo</h1>
      <div>
        {limpopo.map((item) => {
          return (
            <> 
              <div>{item["municipality.name"]}</div>
              <div>{item["municipality.demarcation_code"]}</div>
            </>
          );
        })}
      </div>
      <h1 className="font-bold" >Mpumalanga</h1>
      <div>
        {mpumalanga.map((item) => {
          return (
            <> 
              <div>{item["municipality.name"]}</div>
              <div>{item["municipality.demarcation_code"]}</div>
            </>
          );
        })}
      </div>
      <h1 className="font-bold" >Northern Cape</h1>
      <div>
        {northernCape.map((item) => {
          return (
            <> 
              <div>{item["municipality.name"]}</div>
              <div>{item["municipality.demarcation_code"]}</div>
            </>
          );
        })}
      </div>
      <h1 className="font-bold" >North West</h1>
      <div>
        {northWest.map((item) => {
          return (
            <> 
              <div>{item["municipality.name"]}</div>
              <div>{item["municipality.demarcation_code"]}</div>
            </>
          );
        })}
      </div>
      <h1 className="font-bold" >Western Cape</h1>
      <div>
        {westernCape.map((item) => {
          return (
            <> 
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
