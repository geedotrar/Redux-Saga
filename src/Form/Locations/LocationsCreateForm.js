import React, { useState } from "react";
import LocationsApi from "../../api/LocationsApi";

export default function LocationsCreateForm(props) {
  const [value, setValue] = useState({
    locationId: undefined,
    streetAddress: undefined,
    postalCode: undefined,
    city: undefined,
    stateProvince: undefined,
    country: { countryId: undefined },
  });
  const HandleChange = (streetAddress, postalCode, city, stateProvince, countryId) => (event) => {
    setValue({ ...value, [streetAddress]: event.target.value, [postalCode]: event.target.value, [city]: event.target.value, [stateProvince]: event.target.value, [countryId]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      streetAddress: value.streetAddress,
      postalCode: value.postalCode,
      city: value.city,
      stateProvince: value.stateProvince,
      country: { countryId: value.countryId },
    };
    await LocationsApi.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Locations</h2>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label>Street Address: </label>
            <input type="text" placeholder="Street Address" onChange={HandleChange("streetAddress")}></input>
          </div>
          <div>
            <label>Postal Code: </label>
            <input type="text" placeholder="Postal Code" onChange={HandleChange("postalCode")}></input>
          </div>
          <div>
            <label>City: </label>
            <input type="text" placeholder="City" onChange={HandleChange("city")}></input>
          </div>
          <div>
            <label>State Province: </label>
            <input type="text" placeholder="State Province" onChange={HandleChange("stateProvince")}></input>
          </div>
          <div>
            <label>Country Id: </label>
            <input type="text" placeholder="Country Id" onChange={HandleChange("countryId")}></input>
          </div>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
