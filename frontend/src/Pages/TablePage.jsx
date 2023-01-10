import axios from "axios";
import { useEffect, useState } from "react";
import TableContent from "../Components/TableContent";

const TablePage = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://myulogicbackend-production.up.railway.app/")
      .then((r) => setData(r.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map((el) => (
        <TableContent data={el} />
      ))}
    </div>
  );
};

export default TablePage;
