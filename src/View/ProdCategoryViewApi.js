import React, { useEffect, useState } from "react";
import ProdCategoryApi from "../api/ProdCategoryApi";

export default function ProdCategoryViewApi() {
  const [region, setRegion] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    ProdCategoryApi.list().then((data) => {
      setRegion(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    ProdCategoryApi.deleted(id).then(() => {
      window.alert("Data Successfully Delete");
      setRefresh(true);
    });
  };
  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };
  return (
    <div>
      <h2>List Region</h2>
      <button onClick={() => setDisplay(true)}>Add region</button>
      <table>
        <th> ID</th>
        <th> Name</th>
        <th> Category</th>
        <th>Action</th>
        <tbody>
          {region &&
            region.map((reg) => (
              <tr key={reg.id}>
                <td>{reg.id}</td>
                <td>{reg.name}</td>
                <td>{reg.description}</td>
                <td>
                  <button> Delete Region </button>
                  <button> Edit Region </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
