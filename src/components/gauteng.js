export default function GautengProvince(props) {

    const filteredProvince = props.municipalData.filter(province => {
        return province["municipality.province_name"] == 'Free State';
      });
     console.log(filteredProvince);
  
      const gauteng = filteredProvince.map((item) => (
        <div key={item["municipality.name"]}>
          <a href={item["municipality.url"]}>
            <div>{item["municipality.name"]}</div>
            <div>{item["municipality.demarcation_code"]}</div>
          </a>
        </div>
      ));
      console.log(gauteng)
  
  return(
  <>
  <h1 className="font-bold">Gauteng</h1>
  {gauteng}
  </>
  )
  }