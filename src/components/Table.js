import styles from './Table.module.css';

function Table({ results, setResults, carparksShownOnPage }) {

  const handlerDelete = (code) => {
    const filteredResult2 = results.filter((item) => item.carpark_number !== code)
    setResults(filteredResult2);
  };
   
  console.log(results);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
          <th>Carpark number</th>
            <th>Address</th>
            <th>Distance</th>
            <th>Lots available</th>
            <th>Total lots</th>
            <th>Last updated</th>
            <th></th>
            <th>Free parking</th>
            <th>Night parking</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {/* useEffect(() => {freeParking()}, []); filteredResult =
          results.map((item, i) => key={i}
          {item.free_parking !== "NO"}) */}

          {carparksShownOnPage.map((item, i) => (
            <>
              <tr key={i}>
                <td>{item.carpark_number}</td>
                <td>{item.address}</td>
                <td>{item.distance} KM</td>
                <td><font color={item.colour}>{item.carpark_info[0].lots_available}</font></td>
                <td>{item.carpark_info[0].total_lots}</td>
                <td>{item.update_datetime.substring(0, 10)}</td>
                <td>{item.update_datetime.substring(11, 19)}</td>
                <td>{item.free_parking}</td>
                <td>{item.night_parking}</td>
                <td onClick={() => handlerDelete(item.carpark_number)}>❌</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <br></br>
      <p>{results.length} results</p>
      <br></br>
    </div>
  );
}
export default Table;