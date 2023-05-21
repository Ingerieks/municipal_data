export default function EasternCapeProvince(props) {

    const filteredProvince = props.municipalData.filter(province => {
        return province["municipality.province_name"] == 'Eastern Cape';
      });
     console.log(filteredProvince);
  
      const easternCape = filteredProvince.map((item) => (
        <div key={item["municipality.name"]}>
          <a href={item["municipality.url"]}>
            <div>{item["municipality.name"]}</div>
            <div>{item["municipality.demarcation_code"]}</div>
          </a>
        </div>
      ));
      console.log(easternCape)
  
  return(
  <>
  <h1 className="font-bold">Eastern Cape</h1>
  {easternCape}
  </>
  )
  }