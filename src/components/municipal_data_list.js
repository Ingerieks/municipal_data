export default function MunicipalDataList(props) {
  return (
    <>
      <div>
        <h1 className="font-bold">Municipalities:</h1>
       <h2>{props.renderName}</h2>
      </div>
    </>
  );
}
