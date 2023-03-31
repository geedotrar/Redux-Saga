import React, { useEffect, useState } from "react";
import LocationsApi from "../api/LocationsApi";
import LocationsCreateForm from "../Form/Locations/LocationsCreateForm";

export default function LocationsViewApi() {
  const [locations, setLocations] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    LocationsApi.list().then((data) => {
      setLocations(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    LocationsApi.deleted(id).then(() => {
      window.alert("Data Successfully Delete");
      setRefresh(true);
    });
  };
  return (
    <div>
      {display ? (
        <LocationsCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <div>
          <h2>List Locations</h2>
          <button onClick={() => setDisplay(true)}>Add Location</button>
          <table border="1px">
            <th>Locations ID</th>
            <th>Street Address</th>
            <th>Postal Code</th>
            <th>City</th>
            <th>State Province</th>
            <th>Country id</th>
            <th>Action</th>
            <tbody>
              {locations &&
                locations.map((loc) => (
                  <tr key={loc.locationId}>
                    <td>{loc.locationId}</td>
                    <td>{loc.streetAddress}</td>
                    <td>{loc.postalCode}</td>
                    <td>{loc.city}</td>
                    <td>{loc.stateProvince}</td>
                    <td>{loc.country ? loc.country.countryId : null}</td>
                    <td>
                      <button onClick={() => onDelete(loc.locationId)}>Delete Location</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
