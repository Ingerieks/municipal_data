export default function LimpopoProvince(props) {

    const filteredProvince = props.municipalData.filter(province => {
        return province["municipality.province_name"] == 'Free State';
      });
     console.log(filteredProvince);
  
      const limpopo = filteredProvince.map((item) => (
        <div key={item["municipality.name"]}>
          <a href={item["municipality.url"]}>
            <div>{item["municipality.name"]}</div>
            <div>{item["municipality.demarcation_code"]}</div>
          </a>
        </div>
      ));
      console.log(limpopo)
  
  return(
  <>
  <h1 className="font-bold">Limpopo</h1>
  {limpopo}
  </>
  )
  }