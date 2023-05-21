export default function NorthernCapeProvince(props) {

    const filteredProvince = props.municipalData.filter(province => {
        return province["municipality.province_name"] == 'Northern Cape';
      });
     console.log(filteredProvince);
  
      const northernCape = filteredProvince.map((item) => (
        <div key={item["municipality.name"]}>
          <a href={item["municipality.url"]}>
            <div>{item["municipality.name"]}</div>
            <div>{item["municipality.demarcation_code"]}</div>
          </a>
        </div>
      ));
      console.log(northernCape)
  
  return(
  <>
  <h1 className="font-bold">Northern Cape</h1>
  {northernCape}
  </>
  )
  }