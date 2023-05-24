export default function KwazuluNatalProvince(props) {

    const filteredProvince = props.municipalData.filter(province => {
        return province["municipality.province_name"] == 'Kwazulu-Natal';
      });
  
      const KwazuluNatal = filteredProvince.map((item) => (
        <div key={item["municipality.name"]}>
          <a href={item["municipality.url"]}>
            <div>{item["municipality.name"]}</div>
            <div>{item["municipality.demarcation_code"]}</div>
          </a>
        </div>
      ));
  
  return(
  <>
  <h1 className="font-bold">Kwazulu-Natal</h1>
  {KwazuluNatal}
  </>
  )
  }