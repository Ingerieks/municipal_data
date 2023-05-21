/*export default function SortedByProvince(props) {

        const filtered = props.municipalData.filter(province => {
            return province["municipality.province_name"] == 'Western Cape';
          });
         console.log(filtered);

          const westernCape = filtered.map((item) => (
            <div key={item["municipality.name"]} name={item["municipality.province_name"]}>
              <a href={item["municipality.url"]}>
                <div>{item["municipality.name"]}</div>
                <div>{item["municipality.demarcation_code"]}</div>
              </a>
            </div>
          ));
          console.log(westernCape)

return(
    <>
    <h1 className="font-bold">Western Cape</h1>
    {westernCape}
    </>
)
}*/