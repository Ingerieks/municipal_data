export default function NorthWestProvince(props) {

    const filteredProvince = props.municipalData.filter(province => {
        return province["municipality.province_name"] == 'North West';
      });
     console.log(filteredProvince);
  
      const northWest = filteredProvince.map((item) => (
        <div key={item["municipality.name"]}>
          <a href={item["municipality.url"]}>
            <div>{item["municipality.name"]}</div>
            <div>{item["municipality.demarcation_code"]}</div>
          </a>
        </div>
      ));
      console.log(northWest)
  
  return(
  <>
  <h1 className="font-bold">North West</h1>
  {northWest}
  </>
  )
  }