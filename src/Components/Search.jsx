import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api.js";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return{
          options: response.data.map((city) => {
            return{
              value: `${city.latitude} ${city.longitude}`, //después extraigo info de este elemento
              label: `${city.name} ${city.countryCode}`, //es lo que el usuario puede ver
            }
          })
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for a city"
        debounceTimeout={600} //retrasar funcion
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
